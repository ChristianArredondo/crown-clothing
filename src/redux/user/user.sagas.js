import { takeLatest, put, call, all } from 'redux-saga/effects';
import { userActionTypes } from './user.types';
import { auth, googleProvider, createUser, getCurrentUser } from '../../firebase/firebase.utils';
import {
  signInWithEmailSuccessAction,
  signInWithEmailErrorAction,
  signInWithGoogleSuccessAction,
  checkUserSessionSuccessAction,
  checkUserSessionErrorAction,
  logoutUserSuccessAction
} from './user.actions';

function* getSnapshotFromAuth(userAuth) {
  const userRef = yield call(createUser, userAuth);
  const userSnapshot = yield userRef.get();
  return yield {
    id: userSnapshot.id,
    ...userSnapshot.data()
  };
}

export function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const authUserProfile = yield call(getSnapshotFromAuth, user);
    yield put(signInWithGoogleSuccessAction(authUserProfile));
  } catch (err) {
    yield put(userActionTypes.SIGN_IN_WITH_GOOGLE_ERROR(err));
  }
}

export function* signInWithGoogleStartSaga() {
  yield takeLatest(userActionTypes.SIGN_IN_WITH_GOOGLE_START, signInWithGoogleSaga);
}

export function* signInWithEmailSaga({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const authUserProfile = yield call(getSnapshotFromAuth, user);
    yield put(signInWithEmailSuccessAction(authUserProfile));
  } catch (err) {
    yield put(signInWithEmailErrorAction(err));
  }
}

export function* signInWithEmailStartSaga() {
  yield takeLatest(userActionTypes.SIGN_IN_WITH_EMAIL_START, signInWithEmailSaga);
}

export function* isUserAuthenticated() {
  try {
    const authUser = yield getCurrentUser();
    if (!authUser) return;

    const authUserProfile = yield call(getSnapshotFromAuth, authUser);
    yield put(checkUserSessionSuccessAction(authUserProfile));
  } catch (err) {
    yield put(checkUserSessionErrorAction(err));
  }
}

export function* checkUserSessionSaga() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* performLogout() {
  yield auth.signOut();
  yield put(logoutUserSuccessAction());
}

export function* logoutUserSaga() {
  yield takeLatest(userActionTypes.LOGOUT_USER, performLogout);
}

export function* userSagas() {
  yield all([
    call(signInWithGoogleStartSaga),
    call(signInWithEmailStartSaga),
    call(checkUserSessionSaga),
    call(logoutUserSaga)
  ]);
}
