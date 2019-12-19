import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);
export const selectCollectionEntries = createSelector([selectShopCollections], collections => Object.values(collections));
export const selectShopCollection = collectionId =>
  createSelector([selectShop], shop => {
    return shop.collections[collectionId]
  });
