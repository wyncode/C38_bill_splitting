import React from 'react';
import HomeNav from '../components/HomeNav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <HomeNav />
      <Image
        src={
          'https://res.cloudinary.com/jeanniet89/image/upload/v1599014269/download_evcdkq.png'
        }
        fluid
      />
      <div>
        <Link to="/billpage">
          <Button id="button" variant="dark" type="submit" block>
            Scan QR Code
          </Button>
        </Link>
      </div>
      <h3 className="title mt-5">Rewards</h3>
      <p>
        Thanks for being a member with Cuenta! Check out your rewards for this
        week.
      </p>
      <h6 className="titletwo">Daily Deals</h6>
      <p>
        Use these codes for a discount on your bill, or send them to a friend!
      </p>
    </>
  );
};

export default Home;
