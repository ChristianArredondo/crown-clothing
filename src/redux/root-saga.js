import { all, call } from 'redux-saga/effects';
import { fetchCollections } from './shop/shop.saga';

export default function* rootSaga() {
  yield all([call(fetchCollections)]);
}
