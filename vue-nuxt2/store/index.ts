import User from '@/interfaces/User';
import { ActionTree, MutationTree, GetterTree } from 'vuex';

interface StoreState {
  user: User | null;
}

export const state = (): StoreState => ({
  user: null,
});

export const actions: ActionTree<StoreState, StoreState> = {
  async nuxtServerInit({ commit }, { $http }) {
    const user = await $http.$get('/user/me').catch(() => null);

    if (user) {
      commit('setUser', user);
    }
  },

  async getMe({ commit }) {
    const user = await fetch(`/api/user/me`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((r) => r.json())
      .catch(() => null);

    if (user) {
      commit('setUser', user);
    }
  },

  async login({ commit }, payload: FormData) {
    const res = await fetch(`/api/auth/login`, {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(payload as any)),
      credentials: 'include',
    }).then((r) => r.json());

    if (res) {
      commit('setUser', res);
    }
  },

  async logout({ commit }) {
    await fetch(`/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    }).then((r) => r.json());

    commit('setUser', null);
  },

  async toggleSaved({ commit }, id: number) {
    const res = await fetch(`/api/listing/toggle/${id}`, {
      method: 'POST',
      credentials: 'include',
    }).then((r) => r.json());

    commit('toggleSaved', { id, ...res });
  },
};

export const mutations: MutationTree<StoreState> = {
  setUser(state, payload) {
    state.user = payload;
  },

  toggleSaved(state, { id, status }) {
    if (!state.user) {
      return;
    }

    const listings = state.user?.listings;

    if (status === 'SET') {
      state.user.listings.push(id);
    }
    // status === 'REMOVE'
    else {
      state.user.listings = listings.filter((i) => i !== id);
    }
  },
};

export const getters: GetterTree<StoreState, StoreState> = {
  isAuthenticated: (state) => !!state.user,
  user: (state) => state.user,
  saved: (state) => state.user?.listings,
};
