import { takeLatest, put, all, call } from 'redux-saga/effects';
import { userActionTypes } from '../user/user.types';
import { clearCartAction } from './cart.actions';

export function* clearCart() {
  yield put(clearCartAction());
}

export function* onLogoutSaga() {
  yield takeLatest(userActionTypes.LOGOUT_USER_SUCCESS, clearCart);
}

export function* cartSagas() {
  yield all([call(onLogoutSaga)]);
}
