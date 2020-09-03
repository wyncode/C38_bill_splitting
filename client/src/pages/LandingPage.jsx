import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import UserBenefits from '../components/UserBenefits';
import UserSteps from '../components/UserSteps';
import UserRewards from '../components/UserRewards';

// LANDING PAGE

const LandingPage = () => {
  return (
    <>
      <Navigation />
        <Jumbotron>
            <h1 className="homejumbotitle">Splitting a bill has never been easier.</h1>
            <p className="homejumbotext">
              Scan the QR Code on your receipt, select your ordered items and
              pay!
            </p>
                <Link to="/billpage">
                  <Button className="jumbobtn" id="button" variant="primary" size="lg" block>
                    Split your bill
                  </Button>
                </Link>
        </Jumbotron>
        <UserBenefits />
        <UserSteps />
        <UserRewards />
        <Footer />
    </>
  );
};

export default LandingPage;
