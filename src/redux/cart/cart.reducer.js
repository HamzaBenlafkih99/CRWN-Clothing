import CART_ACTION_TYPES from './cart.types';
import { addItemToCartVraie, clearItemFromCart, removeItemFromCart } from './utils.reducer';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CART_ACTION_TYPES.CART_HIDDEN:
            return({
                ...state,
                hidden: !state.hidden
            })
        case CART_ACTION_TYPES.ADD_ITEM:
            return({
                ...state,
                cartItems: addItemToCartVraie(state.cartItems, action.pyload)
            })
        case CART_ACTION_TYPES.REMOVE_ITEM:
            return({
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.pyload)
            })
        case CART_ACTION_TYPES.CLEAR_ITEM:
            return({
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.pyload)
            })
        default:
            return state;
    }
}

export default cartReducer;