import { shopActionTypes } from './shop.types';

export const setShopCollectionsAction = collections => ({
  type: shopActionTypes.SET_COLLECTIONS,
  payload: collections
});
