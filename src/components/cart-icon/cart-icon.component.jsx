import React from 'react';

import './cart-icon.component.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartAction } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ totalItems, dispatchToggleCart }) => {
  return (
    <div className="cart-icon" onClick={dispatchToggleCart}>
      <ShoppingIcon width="24" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  totalItems: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleCart: () => dispatch(toggleCartAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
