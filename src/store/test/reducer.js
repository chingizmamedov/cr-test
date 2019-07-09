import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { SET_FIELD } from './constants';

const initialState = {
  field: ''
};

function test(state = initialState, action) {
  switch (action.type) {
    case SET_FIELD:
      return {
        field: action.payload
      };

    default:
      return state;
  }
}

export default () => {
  const persistConfig = {
    key: 'field',
    whitelist: ['field'], // make sure it does not clash with server keys
    storage
  };

  return persistReducer(persistConfig, test);
};