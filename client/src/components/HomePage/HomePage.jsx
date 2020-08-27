import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation';

// LANDING PAGE

const HomePage = () => {
  return (
    <>
      <Navigation />
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
      <Footer />
    </>
  );
};

export default HomePage;
