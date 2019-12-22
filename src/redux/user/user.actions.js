import { userActionTypes } from './user.types';

export const setCurrentUserAction = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const signInWithGoogleAction = () => ({
  type: userActionTypes.SIGN_IN_WITH_GOOGLE_START
});

export const signInWithGoogleSuccessAction = user => ({
  type: userActionTypes.SIGN_IN_WITH_GOOGLE_SUCCESS,
  payload: {
    user
  }
});

export const signInWithGoogleErrorAction = error => ({
  type: userActionTypes.SIGN_IN_WITH_GOOGLE_ERROR,
  payload: {
    error
  }
});

export const signInWithEmailAction = emailAndPassword => ({
  type: userActionTypes.SIGN_IN_WITH_EMAIL_START,
  payload: emailAndPassword
});

export const signInWithEmailSuccessAction = user => ({
  type: userActionTypes.SIGN_IN_WITH_EMAIL_SUCCESS,
  payload: {
    user
  }
});

export const signInWithEmailErrorAction = error => ({
  type: userActionTypes.SIGN_IN_WITH_EMAIL_ERROR,
  payload: {
    error
  }
});

export const checkUserSessionAction = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export const checkUserSessionSuccessAction = user => ({
  type: userActionTypes.CHECK_USER_SESSION_SUCCESS,
  payload: {
    user
  }
});

export const checkUserSessionErrorAction = error => ({
  type: userActionTypes.CHECK_USER_SESSION_ERROR,
  payload: {
    error
  }
});

export const logoutUserAction = () => ({
  type: userActionTypes.LOGOUT_USER
});

export const logoutUserSuccessAction = () => ({
  type: userActionTypes.LOGOUT_USER_SUCCESS
});

export const registerUserAction = emailAndPassword => ({
  type: userActionTypes.REGISTER_USER,
  payload: emailAndPassword
});

export const registerUserSuccessAction = user => ({
  type: userActionTypes.REGISTER_USER_SUCCESS,
  payload: {
    user
  }
});

export const registerUserErrorAction = error => ({
  type: userActionTypes.REGISTER_USER_ERROR,
  payload: {
    error
  }
});
