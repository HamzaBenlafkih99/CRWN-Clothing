import { createSelector } from 'reselect';

const selectcollection = state => state.shop;

export const selectCollections = createSelector(
    [selectcollection],
    (shop) => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollectionCat = collectionId => createSelector(
    [selectCollections],
    collections => collections[collectionId]
)