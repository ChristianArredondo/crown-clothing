import React from 'react';

import './checkout-item.styles.scss';
import {
  removeCartItem,
  decrementCartItem,
  addCartItemAction
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, dispatchRemoveItem, dispatchDecrementItem, dispatchAddItem }) => {
  const { imageUrl, name, price, count } = item;

  const handleDecrementItemClick = () => dispatchDecrementItem(item);
  const handleIncrementItemClick = () => dispatchAddItem(item);
  const handleRemoveItemClick = () => dispatchRemoveItem(item);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="cart product preview" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="count-button" onClick={handleDecrementItemClick}>
          &#10094;
        </div>
        <span className="value">{count}</span>
        <div className="count-button" onClick={handleIncrementItemClick}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleRemoveItemClick}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchRemoveItem: item => dispatch(removeCartItem(item)),
  dispatchDecrementItem: item => dispatch(decrementCartItem(item)),
  dispatchAddItem: item => dispatch(addCartItemAction(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
