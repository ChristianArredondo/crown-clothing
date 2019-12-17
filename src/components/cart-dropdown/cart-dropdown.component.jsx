import React from 'react';

import './cart-dropdown.styles.scss';
import CrownButton from '../crown-button/crown-button.component';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CrownButton>GO TO CHECKOUT</CrownButton>
    </div>
  );
};

export default CartDropdown;
