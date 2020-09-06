import React from 'react';
import Media from 'react-bootstrap/Media';

const UserBenefits = () => {
  return (
    <>
      <div>
        <h1 className="homepagetitles mt-4 mb-4">Cuenta user benefits</h1>
      </div>
      <div className="row">
        <div className="col-2 mr-4">
          <img
            src={
              'https://res.cloudinary.com/jeanniet89/image/upload/v1599115917/Cuenta%20App/Cuenta_ribbon_dotted_circle_copy_krxqfe.png'
            }
            className="homecircleimg"
            alt="Cuenta Brand"
          />
        </div>
        <div className="col ml-4" id="benefitrewards">
          <Media>
            <img
              width={30}
              height={30}
              className="mr-3"
              src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png"
              alt="icon"
            />
            <Media.Body>
              <h3 className="benefittitle">Time</h3>
              <p className="benefittext">
                Receive daily rewards and discounts from local restaurants.
              </p>
              <Media>
                <img
                  width={30}
                  height={30}
                  className="mr-3"
                  src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png"
                  alt="icon"
                />
                <Media.Body>
                  <h3 className="benefittitle">Rewards</h3>
                  <p className="benefittext">
                    Cuenta users save an average of 5 mins during the bill
                    splitting process.
                  </p>
                  <Media>
                    <img
                      width={30}
                      height={30}
                      className="mr-3"
                      src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png"
                      alt="icon"
                    />
                    <Media.Body>
                      <h3 className="benefittitle">Transactions</h3>
                      <p className="benefittext">
                        Access your past transactions at any time with one
                        click.
                      </p>
                      <Media>
                        <img
                          width={30}
                          height={30}
                          className="mr-3"
                          src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822779/Cuenta%20App/Plus_blue_ohbnmw.png"
                          alt="icon"
                        />
                        <Media.Body>
                          <h3 className="benefittitle">Community</h3>
                          <p className="benefittext">
                            Access your past transactions at any time with one
                            click.
                          </p>
                        </Media.Body>
                      </Media>
                    </Media.Body>
                  </Media>
                </Media.Body>
              </Media>
            </Media.Body>
          </Media>
        </div>
      </div>
    </>
  );
};

export default UserBenefits;
