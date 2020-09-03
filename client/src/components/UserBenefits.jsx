import React from 'react';


const UserBenefits = () => {
  return (
    <>
     <div class="page-header">
      <h1 className="homepagetitles mt-4 mb-4">Cuenta user benefits</h1> 
    </div>
    <div className="row">
      <div className="col">
        <img 
        src={'https://res.cloudinary.com/jeanniet89/image/upload/v1599115917/Cuenta%20App/Cuenta_ribbon_dotted_circle_copy_krxqfe.png'} 
        className="homecircleimg" alt="Cuenta Brand" /></div>
        <div  className="col" id="benefitrewards">
          {/* <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon" style={{ width: '20px' }} /> */}
          <i className="fas fa-cocktail" style={{ size:"3rem", color:"#41ccaa",  width: '50px' }}></i> 
          <h3 className="benefittitle">Time</h3>
            <p className="benefittext">Receive daily rewards and discounts from local restaurants.</p>
          {/* <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon" style={{ width: '20px' }} /> */}
          <i className="fas fa-cocktail" style={{ size:"3rem", color:"#41ccaa",  width: '50px' }}></i> 
            <h3 className="benefittitle">Rewards</h3>
            <p className="benefittext">Cuenta users save an average of 5 mins during the bill splitting process.</p>
          {/* <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png'}
          alt="Plus Icon" style={{ width: '20px' }} /> */}
          <i className="fas fa-cocktail" style={{ size:"3rem", color:"#41ccaa",  width: '50px' }}></i> 
              <h3 className="benefittitle">Transactions</h3>
              <p className="benefittext">Access your past transactions at any time with one click.</p>
          <img
          src={'https://res.cloudinary.com/jeanniet89/image/upload/v1598822858/Cuenta%20App/Cuenta_shield_yis559.png'}
          alt="Plus Icon" style={{ width: '30px', size:'3rem' }} />
          <h3 className="benefittitle">Community</h3>
          <p className="benefittext">Access your past transactions at any time with one click.</p>
        </div>
      </div>
      </>
  );
};

export default UserBenefits;
