import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { setCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.reselect';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ setCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={setCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'> { itemCount } </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setCartHidden: () => dispatch(setCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
