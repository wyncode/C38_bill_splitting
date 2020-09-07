import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import receiptData from '../context/ReceiptData';
import Product from '../components/Stripe_info/Product';
import Navigation from '../components/Navigation';

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
      <div className="receiptimg row">
        <div className="col-4 align-items-center justify-content-center">
          <img
            src="https://res.cloudinary.com/jeanniet89/image/upload/v1598823040/Cuenta%20App/Cuenta_-_Homepage_Carousel_wp8rkw.gif"
            alt="homecarousel"
            style={{ height: '15%' }}
          />
        </div>
        <div className="col-4 align-items-center justify-content-center">
          <img
            src="https://res.cloudinary.com/jeanniet89/image/upload/v1598823035/Cuenta%20App/Cuenta_-_Select_Order_sdwpyp.gif"
            alt="elect items"
            style={{ height: '15%' }}
          />
        </div>
        <div className="col-4 align-items-center justify-content-center">
          <img
            src="https://res.cloudinary.com/jeanniet89/image/upload/v1598823032/Cuenta%20App/Cuenta_-_Apple_Pay_dh2qdf.gif"
            alt="payment"
            style={{ height: '15%' }}
          />
        </div>
      </div>
      <div className="receipt-tab">
        {receiptData.map((item) => (
          <Product
            key={item.id}
            handleAddToCart={() => handleAddToCart(item)}
            handleRemoveFromCart={() => handleRemoveFromCart(item)}
            isInCart={cart[item.id]}
            {...item}
          />
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
    </>
  );
};

export default ReceiptPage;
