import { shopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: null,
  fetchError: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS: {
      return {
        ...state,
        isFetching: true
      };
    }
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        collections: action.payload.collections,
        isFetching: false
      };
    }
    case shopActionTypes.FETCH_COLLECTIONS_ERROR: {
      return {
        ...state,
        isFetching: false,
        fetchError: action.payload.error
      };
    }
    case shopActionTypes.SET_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
