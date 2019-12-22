import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  authUser: null,
  authError: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.CHECK_USER_SESSION_SUCCESS:
    case userActionTypes.SIGN_IN_WITH_EMAIL_SUCCESS:
    case userActionTypes.SIGN_IN_WITH_GOOGLE_SUCCESS: {
      return {
        ...state,
        authUser: action.payload.user,
        authError: INITIAL_STATE.authError
      };
    }
    case userActionTypes.CHECK_USER_SESSION_ERROR:
    case userActionTypes.SIGN_IN_WITH_EMAIL_ERROR:
    case userActionTypes.SIGN_IN_WITH_GOOGLE_ERROR: {
      return {
        ...state,
        authError: action.payload.error
      };
    }
    default:
      return state;
  }
};

export default userReducer;
