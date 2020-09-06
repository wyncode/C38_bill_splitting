import React from 'react';
import { Button } from 'react-bootstrap';

const UserRewards = () => {
  return (
    <>
      <div>
        <h1 className="homepagetitles mt-4 mb-4">Cuenta rewards</h1>
      </div>
      <h3 className="homepagetext mt-4 mb-4">
        Become a member and unlock <br />
        rewards in your neighborhood.
      </h3>
      <div className="card">
        <img
          className="card-img-top"
          src="https://res.cloudinary.com/jeanniet89/image/upload/c_limit,h_455,w_951/v1598822894/Cuenta%20App/happy_hour_onn8ay.png"
          alt="Deals"
        />
        <div className="card-img-overlay">
          <h4
            id="rewardstext"
            className="card-title"
            style={{ color: 'white' }}
          >
            Sign up to unlock deals near you!!
          </h4>
          <Button
            className="wobble"
            id="rewardsbtn"
            href="/signup"
            variant="link"
            style={{ size: '20px', color: '#41ccaa' }}
          >
            Sing Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserRewards;
