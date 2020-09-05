import React from 'react';

const Product = ({
  name,
  price,
  handleAddToCart,
  handleRemoveFromCart,
  isInCart
}) => {
  return (
    <div className="product item">
      <div>{name}</div>
      <div>{price}</div>
      {isInCart ? (
        <button onClick={handleRemoveFromCart}>Remove from cart!</button>
      ) : (
        <button onClick={handleAddToCart}>Add to cart!</button>
      )}
    </div>
  );
};

export default Product;
