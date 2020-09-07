import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import receiptData from '../context/ReceiptData';
import Product from '../components/Stripe_info/Product';
import Navigation from '../components/Navigation';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const ReceiptPage = () => {
  const { currentUser } = useContext(AppContext);
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
  const [cart, setCart] = useState({});
  const history = useHistory();
  const cartTotal = Object.values(cart).reduce(
    (acc, { price }) => acc + price,
    0
  );
  const handleAddToCart = (product) => {
    const productInCart = cart[product.id];
    const newQuantity = productInCart ? productInCart.quantity + 1 : 1;
    setCart({ ...cart, [product.id]: { ...product, quantity: newQuantity } });
  };
  const handleRemoveFromCart = (cartItem) => {
    const newCart = { ...cart };
    delete newCart[cartItem.id];
    setCart(newCart);
  };
  const handleToken = async (token) => {
    const [postRoute, redirectRoute] = currentUser
      ? ['/api/bill/checkout', '/history']
      : ['/api/guest-checkout', '/'];
    await axios.post(
      postRoute,
      { token, amountDue: cartTotal * 100 },
      { withCredentials: !!currentUser }
    );
    history.push(redirectRoute);
  };
  return (
    <>
      <Navigation />
      <Container className="receiptimg mt-8">
        <div className="align-items-center receipt-tab">
          {receiptData.map((item) => (
            <div className="homepagetitles" style={{ padding: '4px' }}>
              <Product
                key={item.id}
                handleAddToCart={() => handleAddToCart(item)}
                handleRemoveFromCart={() => handleRemoveFromCart(item)}
                isInCart={cart[item.id]}
                {...item}
              />
            </div>
          ))}
        </div>
        <div className="cart">
          <br />
          <h3>Your Tab</h3>
          {!!cartTotal && (
            <div className="checkout">
              <p>Your total is {cartTotal}</p>
              <StripeCheckout
                stripeKey={stripeKey}
                token={handleToken}
                amount={cartTotal * 100}
              />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
export default ReceiptPage;
