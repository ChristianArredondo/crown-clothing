import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';

import './checkout-page.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <hr/>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
