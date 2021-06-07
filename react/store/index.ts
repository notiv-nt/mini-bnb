import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { reducer, State } from './reducer';

export const makeStore: MakeStore<State> = () => createStore(reducer, applyMiddleware(logger));

export const StoreWrapper = createWrapper<State>(makeStore, {
  /* debug: true */
});
