import React from 'react';

const UserBenefits = () => {
  return (
    <div>
      <h1>Cuenta user benefits</h1>
      <div className="homecircleimg"></div>
      {/* <div className="container"> */}
        <div>
        <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon" style={{ width: '20px' }} />
            <h3 className="hometext">Time</h3> 
            <p>Receive daily rewards and discounts from local restaurants.</p>
        </div>
        <div>
          <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon" style={{ width: '20px' }} />
            <h3 className="hometext">Rewards</h3>
            <p>Cuenta users save an average of 5 mins during the bill splitting process.</p>
        </div>
        <div>
        <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon" style={{ width: '20px' }} />
              <h3 className="hometext">Transactions</h3>
              <p>Access your past transactions at any time with one click.</p>
        </div>
        <div>
        <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon" style={{ width: '20px' }} />
          <h3 className="hometext">Community</h3>
          <p>Access your past transactions at any time with one click.</p>
        </div>
      </div>
    // </div>
  );
};

export default UserBenefits;
