import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const stripePublishableKey = process.env.REACT_APP_stripe_publishableKey;

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = token => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripePublishableKey}
    />
  );
};

export default StripeCheckoutButton;
