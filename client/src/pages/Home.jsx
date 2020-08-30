import React from 'react';
import HomeNav from '../components/HomeNav';
import './Home.css';

const Home = () => {
  return (
    <div>
      <HomeNav />
      <div>
        <h3 className="title">Rewards</h3>
        <p>
          Thanks for being a member with Cuenta! Check out your rewards for this
          week.
        </p>
        <h5 className="titletwo">Daily Deals</h5>
        <p>
          Use these codes for a discount on your bill, or send them to a friend!
        </p>
      </div>
    </div>
  );
};

export default Home;
