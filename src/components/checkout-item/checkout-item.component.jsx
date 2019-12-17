import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ imageUrl, name, price, count }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="cart product preview" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{count}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
