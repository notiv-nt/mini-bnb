import { AnyAction, Reducer } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { User } from '~/interfaces/User';

export interface State {
  user: User | null;
}

export const reducer: Reducer = (state: State = { user: null }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'LOGOUT':
      return { ...state, user: null };

    case 'ADD_LISTING':
      return { ...state, user: addListing(state.user, action.payload) };

    case 'REMOVE_LISTING':
      return { ...state, user: removeListing(state.user, action.payload) };

    default:
      return state;
  }
};

function addListing(user: User | null, id: number) {
  if (!user) return null;

  return {
    ...user,
    listings: [...user.listings, id],
  };
}

function removeListing(user: User | null, id: number) {
  if (!user) return null;

  return {
    ...user,
    listings: user.listings.filter((i) => i !== id),
  };
}
