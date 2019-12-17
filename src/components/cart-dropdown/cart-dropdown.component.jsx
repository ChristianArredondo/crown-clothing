import React from 'react';

import './cart-dropdown.styles.scss';
import CrownButton from '../crown-button/crown-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartAction } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatchToggleCart }) => {
  const onClick = () => {
    dispatchToggleCart();
    history.push('/checkout');
  };
  const cartComponents = cartItems.map(item => {
    return <CartItem key={item.id} {...item} />;
  });
  const noItemsSelected = <span className="empty-message">There are no items in your cart.</span>;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartComponents.length ? cartComponents : noItemsSelected}</div>
      <CrownButton onClick={onClick}>GO TO CHECKOUT</CrownButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleCart: () => dispatch(toggleCartAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
