import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <Jumbotron id="jumbo" border="primary">
      <div className="homepage">
        <h1>Splitting a bill has never been easier.</h1>
        <p>
          Scan the QR Code on your receipt, select your ordered items and pay!
        </p>
        <p>
          <>
            <Button variant="dark" size="lg" block>
              Split your button
            </Button>
          </>
        </p>
      </div>
    </Jumbotron>
  );
};

export default HomePage;
