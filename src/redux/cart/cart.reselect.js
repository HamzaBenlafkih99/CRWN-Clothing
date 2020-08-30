import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    CartItems => CartItems.reduce((acc, CartItem)=>
     acc + CartItem.quantity
     ,0
    )
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
 );
  
export const selectCartCount = createSelector(
    [selectCartItems],
    CartItems => CartItems.reduce((acc, CartItem)=>
     acc + CartItem.quantity * CartItem.price
     ,0
    )
);