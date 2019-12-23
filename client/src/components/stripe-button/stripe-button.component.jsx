import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './stripe-button.styles.scss';

const stripePublishableKey = process.env.REACT_APP_stripe_publishableKey;

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: priceForStripe
      }
    })
      .then(() => {
        alert('Payment successful!');
      })
      .catch(err => {
        console.log(`Payment error: ${JSON.parse(err)}`);
        alert('There was an issue with your payment.');
      });
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
