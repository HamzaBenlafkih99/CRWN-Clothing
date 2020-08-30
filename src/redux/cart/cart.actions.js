import CART_ACTION_TYPES from './cart.types';

export const setCartHidden = () => ({
    type: CART_ACTION_TYPES.CART_HIDDEN
})

export const addItemtoCart = item => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    pyload: item
})

export const removeItem = item => ({
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    pyload: item
})

export const clearItem = item => ({
   type: CART_ACTION_TYPES.CLEAR_ITEM,
   pyload: item
})