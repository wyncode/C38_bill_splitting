import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';

const Product = ({
  name,
  price,
  handleAddToCart,
  handleRemoveFromCart,
  isInCart
}) => {
  return (
    <Container className="homepagetext" id="rewardsbtn">
      <Row className="product item">
        <Col>{name}</Col>
        <Col>{price}</Col>
        {isInCart ? (
          <Button onClick={handleRemoveFromCart}>Remove from cart!</Button>
        ) : (
          <Button onClick={handleAddToCart}>Add to cart!</Button>
        )}
      </Row>
    </Container>
  );
};

export default Product;
