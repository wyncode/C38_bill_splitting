import React from 'react';

const CartItem = ({ price, quantity }) => {
  const subTotal = price * quantity;
  const tax = (price * 107) / 100;
  const gratuity = (price * 118) / 100;
  const total = subTotal + tax + gratuity;

  return (
    <div className="cart-item item">
      <p>subtotal {subTotal}</p>
      <p>tax: {tax}</p>
      <p>gratuity: {gratuity}</p>
      <p>total: {total}</p>
    </div>
  );
};

export default CartItem;
