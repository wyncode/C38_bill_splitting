import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Jumbotron>
      <div className="homepage">
        <h1>Splitting a bill has never been easier.</h1>
        <p>
          Scan the QR Code on your receipt, select your ordered items and pay!
        </p>
        <p>
          <>
            <Link to="/billpage">
              <Button id="button" variant="dark" size="lg" block>
                Split the BILL
              </Button>
            </Link>
          </>
        </p>
      </div>
    </Jumbotron>
  );
};

export default HomePage;
