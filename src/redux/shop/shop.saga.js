import { takeLatest, put, call } from 'redux-saga/effects';
import { shopActionTypes } from './shop.types';
import { firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsError } from './shop.actions';

const mapToDictionary = snapshot => {
  return snapshot.docs
    .map(doc => {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    })
    .reduce((memo, coll) => {
      memo[coll.title.toLowerCase()] = coll;
      return memo;
    }, {});
};

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsDictionary = yield call(mapToDictionary, snapshot);
    yield put(fetchCollectionsSuccess(collectionsDictionary));
  } catch (err) {
    yield put(fetchCollectionsError(err));
  }
}

export function* fetchCollections() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS, fetchCollectionsAsync);
}
