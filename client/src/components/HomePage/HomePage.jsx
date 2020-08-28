import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation';
import UserBenefits from '../UserBenefits';
import UserSteps from '../UserSteps';
import HomeCarousel from '../HomeCarousel';

// LANDING PAGE

const HomePage = () => {
  return (
    <>
      <Navigation />

      <div>
        <Jumbotron>
          <div className="homepage">
            <h1>Splitting a bill has never been easier.</h1>
            <p>
              Scan the QR Code on your receipt, select your ordered items and
              pay!
            </p>
            <p>
              <>
                <Link to="/billpage">
                  <Button id="button" variant="primary" size="lg" block>
                    Split your bill
                  </Button>
                </Link>
              </>
            </p>
          </div>
        </Jumbotron>
        <Footer />
        <UserBenefits />
        <UserSteps />
        <HomeCarousel />
      </div>
    </>
  );
};

export default HomePage;
