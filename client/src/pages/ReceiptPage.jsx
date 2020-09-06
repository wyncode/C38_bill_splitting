import React, { useState } from 'react';
import receiptData from '../context/ReceiptData';
import Product from '../components/Stripe_info/Product';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';

const ReceiptPage = () => {
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
  const [cart, setCart] = useState({});
  const [isInCart, setIsInCart] = useState(false);
  const history = useHistory();

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

  function handleToken() {
    history.push('/home');
  }
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
        {!!cartTotal && (
          <div className="checkout">
            <p>Your total is {cartTotal}</p>
            <StripeCheckout
              stripeKey={stripeKey}
              token={handleToken}
              onClick={console.log(stripeKey)}
              amount={cartTotal * 100}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ReceiptPage;
