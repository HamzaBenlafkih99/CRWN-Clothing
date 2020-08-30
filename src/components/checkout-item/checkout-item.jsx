import React from 'react';
import './checkout-item.styles.scss';
import { removeItem, clearItem, addItemtoCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, removeItem, addItemtoCart, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
          <div className='image-container'>
            <img src={imageUrl} alt='item' />
          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
              <div className='arrow' onClick={()=> clearItem(cartItem)} >
                 &#10094;
              </div>
              <span className='quantity'>{quantity}</span>
              <div className='arrow' onClick={()=> addItemtoCart(cartItem)}>
                 &#10095;
              </div>
          </span>
          
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={()=> removeItem(cartItem)} >&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
  removeItem: item => dispatch(removeItem(item)),
  addItemtoCart: item => dispatch(addItemtoCart(item)),
  clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);