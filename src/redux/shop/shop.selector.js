import { createSelector } from 'reselect';

const selectcollection = state => state.shop;

export const selectCollections = createSelector(
    [selectcollection],
    (shop) => shop.collections
)