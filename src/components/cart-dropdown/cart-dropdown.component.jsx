import React from 'react';

import './cart-dropdown.styles.scss';
import CrownButton from '../crown-button/crown-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => {
  const cartComponents = cartItems.map(item => {
    return <CartItem key={item.id} {...item} />;
  });
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartComponents}</div>
      <CrownButton>GO TO CHECKOUT</CrownButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
