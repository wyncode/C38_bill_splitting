import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserBenefits from '../UserBenefits';
import UserSteps from '../UserSteps';
import HomeCarousel from '../HomeCarousel';

const HomePage = () => {
  return (
    <div>
      <Jumbotron>
        <div className="homepage">
          <h1>Splitting a bill has never been easier.</h1>
          <p>
            Scan the QR Code on your receipt, select your ordered items and pay!
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
      <UserBenefits />
      <UserSteps />
      <HomeCarousel />
    </div>
  );
};

export default HomePage;
