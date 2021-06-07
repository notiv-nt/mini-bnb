import { createStore } from 'vuex';
import { get, post } from '@/lib/http';

interface User {
  id: number;
  name: string;
  listings: number[];
}

interface Store {
  user: User | null;
}

export default createStore<Store>({
  state: {
    user: null,
  },

  actions: {
    async getMe({ commit }) {
      const user = await get('/user/me').catch((e: Response) => {
        // console.log(`/user/me ${e.status} ${e.statusText}`);
      });

      commit('setUser', user);
    },

    async login({ commit }, payload: FormData) {
      const res = await post('/auth/login', payload);

      if (res) {
        commit('setUser', res);
      }
    },

    async logout({ commit }) {
      await post('/auth/logout');
      commit('setUser', null);
    },

    async toggleSaved({ commit }, id: number) {
      const res = await post(`/listing/toggle/${id}`);

      commit('toggleSaved', { id, ...res });
    },
  },

  mutations: {
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

      console.log(state.user.listings);
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
    user: (state) => state.user,
    saved: (state) => state.user?.listings,
  },
});
