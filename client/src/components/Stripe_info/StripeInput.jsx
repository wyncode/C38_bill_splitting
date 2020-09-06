import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const CARD_OPTIONS = {
  style: {
    base: {
      color: 'black',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: 'black'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

const StripeInput = (_) => <CardElement options={CARD_OPTIONS} />;

export default StripeInput;
