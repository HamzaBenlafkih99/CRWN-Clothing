import React from 'react';
import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';
import { setCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.reselect';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems, dispatch, history }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map(cartItem => 
              <CartItem key={cartItem.id} item = { cartItem } />
          ):
          <span> Your cart is empty </span>
        }
      </div>
      <CustomButton onClick={()=> {
        dispatch(setCartHidden())
        history.push('/checkout')
      }} >GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
  