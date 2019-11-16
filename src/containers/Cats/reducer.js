import {IMPORT_CATS_REQUEST, IMPORT_CATS_SUCCESS_RESPONSE, IMPORT_CATS_FAILURE_RESPONSE} from './action'

const defaultState = {
  isFetching: false,
  error: null,
  cats: []
};

export default function catReducer(state = defaultState, action) {
  switch(action.type) {
case IMPORT_CATS_REQUEST:
  return {
      ...state,
      isFetching: true
  }
case IMPORT_CATS_SUCCESS_RESPONSE:
  return {
      ...state,
      isFetching: false,
      cats: action.cats
  }
case IMPORT_CATS_FAILURE_RESPONSE:
      return {
          ...state,
          isFetching: false,
          error: action.error
      }
      default:             
      return state;
    }
  }
