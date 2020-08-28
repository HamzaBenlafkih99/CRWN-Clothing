import CART_ACTION_TYPES from './cart.types';
import { addItemToCartVraie } from './utils.reducer';
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
        default:
            return state;
    }
}

export default cartReducer;