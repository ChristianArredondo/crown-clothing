import { takeLatest, put, call, all } from 'redux-saga/effects';
import { userActionTypes } from './user.types';
import { auth, googleProvider, createUser } from '../../firebase/firebase.utils';
import {
  signInWithEmailSuccessAction,
  signInWithEmailErrorAction,
  signInWithGoogleSuccessAction
} from './user.actions';

function* getSnapshotFromAuth(user) {
  const userRef = yield call(createUser, user);
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

export function* userSagas() {
  yield all([call(signInWithGoogleStartSaga), call(signInWithEmailStartSaga)]);
}
