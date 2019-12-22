import { all, call } from 'redux-saga/effects';
import { fetchCollectionsSaga } from './shop/shop.saga';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsSaga), call(userSagas)]);
}
