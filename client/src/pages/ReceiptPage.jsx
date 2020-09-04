import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import receiptData from '../context/ReceiptData';
import Product from '../components/Stripe_info/Product';
import CartItems from '../components/Stripe_info/CartItems';
import CheckoutModal from '../components/Stripe_info/CheckoutModal';

const ReceiptPage = () => {
  const stripe = useStripe();
  const stripeElements = useElements();
  const [cart, setCart] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const cartTotal = Object.values(cart).reduce(
    (acc, { price }) => acc + price,
    0
  );

  const handleAddToCart = (product) => {
    const productInCart = cart[product.id];
    const newQuantity = productInCart ? productInCart.quantity + 1 : 1;
    setCart({ ...cart, [product.id]: { ...product, quantity: newQuantity } });
    setIsInCart(true);
  };

  const handleRemoveFromCart = (cartItem) => {
    const newCart = { ...cart };

    delete newCart[cartItem.id];

    setCart(newCart);
    setIsInCart(false);
  };

  const handleStartCheckout = () => {
    setIsOpen(true);
  };

  const handleCancelCheckout = () => {
    setIsOpen(false);
  };

  const handleCommitOrder = async (e) => {
    e.preventDefault();

    const cardInputEl = stripeElements.getElement(CardElement);
    const { token } = await stripe.createToken(cardInputEl);

    const { data } = await axios.post('/commit-order', {
      token,
      cartTotal,
      cart
    });

    data.success ? toast.success(data.message) : toast.error(data.message);
    setCart({});
    setIsOpen(false);
  };
  return (
    <>
      <div className="receipt-tab">
        <div className="receipt-number">tab ID</div>
        {receiptData.map((item) => (
          <Product
            key={item.id}
            handleAddToCart={() => handleAddToCart(item)}
            handleRemoveFromCart={() => handleRemoveFromCart(item)}
            isInCart={isInCart}
            {...item}
          />
        ))}
      </div>
      <div className="cart">
        <h3>Your Tab</h3>
        {/* {Object.values(cart).map((cartItem) => (
          <CartItems key={cartItem.id} {...cartItem} />
        ))} */}
        {!!cartTotal && (
          <div className="checkout">
            <p>Your total is {cartTotal}</p>
            <button onClick={handleStartCheckout}>Pay bill</button>
          </div>
        )}
      </div>
      <CheckoutModal
        handleCommitOrder={handleCommitOrder}
        handleCancelCheckout={handleCancelCheckout}
        isOpen={isOpen}
      />
    </>
  );
};

export default ReceiptPage;
