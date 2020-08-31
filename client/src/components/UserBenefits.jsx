import React from 'react';
import { Card } from 'react-bootstrap';

const UserBenefits = () => {
  return (
    <div>
      <h1>Cuenta user benefits</h1>
      <div className="left">
    
      </div>
      <div className="container">
        <Card>
        <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Time Plus Icon"
          style={{
            width: '20px'
          }} /><h3 className="hometext">Time</h3> 
          <Card.Text>
            Receive daily rewards and discounts from local restaurants.
          </Card.Text>
        </Card>
        <Card>
        <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Time Plus Icon"
          style={{
            width: '20px'
          }} /><h3 className="hometext">Rewards</h3>
          <Card.Text>
            Cuenta users save an average of 5 mins during the bill splitting
            process.
          </Card.Text>
        </Card>
        <Card>
        <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon"
          style={{
            width: '20px'
          }} /><h3 className="hometext">Transactions</h3>
          <Card.Text>
            Access your past transactions at any time with one click.
          </Card.Text>
        </Card>
        <Card>
        <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon"
          style={{
            width: '20px'
          }} /><h3 className="hometext">Community</h3>
          <Card.Text>
            Access your past transactions at any time with one click.
          </Card.Text>
        </Card>
      </div>
    </div>
  );
};

export default UserBenefits;
