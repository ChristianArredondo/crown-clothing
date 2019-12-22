import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);
export const selectCollectionEntries = createSelector([selectShopCollections], collections =>
  collections ? Object.values(collections) : null
);
export const selectShopCollection = collectionId =>
  createSelector([selectShop], shop => {
    if (!shop || !shop.collections) {
      return null;
    }
    return shop.collections[collectionId];
  });

export const selectIsCollectionsFetching = createSelector([selectShop], shop => shop.isFetching);
export const selectCollectionsFetchingError = createSelector([selectShop], shop => shop.fetchError);
export const selectIsCollectionsLoaded = createSelector([selectIsCollectionsFetching], isFetching => isFetching === false)