import ShopActionType from './shop.type';

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.UPPDATE_OLLECTION:
      return {
        ...state,
        collections: action.pyload
      }
    default:
      return state;
  }
};

export default shopReducer;
