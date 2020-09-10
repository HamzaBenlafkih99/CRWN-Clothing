import ShopActionType from './shop.type';

export const uppdateCollection = collectionMap =>({
    type: ShopActionType.UPPDATE_OLLECTION,
    pyload: collectionMap
});