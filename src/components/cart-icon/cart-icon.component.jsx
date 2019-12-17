import React from 'react';

import './cart-icon.component.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartAction } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({ itemCount, dispatchToggleCart }) => {
  return (
    <div className="cart-icon" onClick={dispatchToggleCart}>
      <ShoppingIcon width="24" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchToggleCart: () => dispatch(toggleCartAction())
});

export default connect(null, mapDispatchToProps)(CartIcon);
