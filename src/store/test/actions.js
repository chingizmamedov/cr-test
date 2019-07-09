import { SET_FIELD } from './constants';

export function setField(value) {
  return (dispatch) => {
    return dispatch({
      type: SET_FIELD,
      payload: 12
    });
  }
};