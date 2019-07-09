import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

const makeConfiguredStore = (reducer, initialState) =>
    createStore(
      reducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware
        )
      )
    );

export const makeStore = (initialState, { isServer, req, debug, storeKey }) => {
    if (isServer) {
      return makeConfiguredStore(reducer, initialState);
    } else {
        // we need it only on client side
        const store = makeConfiguredStore(reducer, initialState);

        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }
};
