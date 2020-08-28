import React from 'react';
import './collection-item.scss';
import { connect } from 'react-redux';
import { addItemtoCart } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button';
const CollectionItem = ({ item, addItemtoCart }) => {
  const { imageUrl, name, price } = item;
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton inverted onClick={()=> addItemtoCart(item)} >
        Add to cart
    </CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItemtoCart: item => dispatch(addItemtoCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);