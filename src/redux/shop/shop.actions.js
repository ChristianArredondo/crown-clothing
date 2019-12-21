import { shopActionTypes } from './shop.types';
import { firestore } from '../../firebase/firebase.utils';

export const setShopCollectionsAction = collections => ({
  type: shopActionTypes.SET_COLLECTIONS,
  payload: collections
});

export const fetchCollections = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS
});
export const fetchCollectionsSuccess = collections => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: {
    collections
  }
});
export const fetchCollectionsError = error => ({
  type: shopActionTypes.FETCH_COLLECTIONS_ERROR,
  payload: {
    error
  }
});

export const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollections());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsDictionary = snapshot.docs
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
        dispatch(fetchCollectionsSuccess(collectionsDictionary));
      })
      .catch(err => dispatch(fetchCollectionsError(err)));
  };
};
