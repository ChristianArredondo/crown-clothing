import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ imageUrl, price, name, count }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart product" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {count} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
