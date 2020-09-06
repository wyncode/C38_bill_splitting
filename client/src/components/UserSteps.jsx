import React from 'react';
import { Carousel } from 'react-bootstrap';

const UserSteps = () => {
  return (
    <>
    <div>
      <h1 className="homepagetitles mt-4 mb-4">How Cuenta works</h1>
      </div>
      {/* <div className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
      </div> */}
      <Carousel className="carousel-inner mt-4 mb-4">
        <Carousel.Item>
          <img
            className="d-block"
            src={
              'https://res.cloudinary.com/jeanniet89/image/upload/c_limit,h_1335,w_882/v1598822858/Cuenta%20App/Scan_icon_nsmd6v.png'
            }
            alt="QR Scanner"
            height="350vh"
          />
            <h2 className="hometext">Scan</h2>
            <h3 className="homepagetext">the QR code in your receipt</h3>
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={
              'https://res.cloudinary.com/jeanniet89/image/upload/c_limit,h_1335,w_882/v1598822858/Cuenta%20App/Select_active_icon_jo3ak1.png'
            }
            alt="Item Selection"
            height="350vh"
          />
            <h2 className="hometext">Select</h2>
            <h3 className="homepagetext">the items you ordered</h3>
     
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={
              'https://res.cloudinary.com/jeanniet89/image/upload/c_limit,h_1335,w_882/Cuenta%20App/Payment_active_icon_n4zmhg.png'
            }
            alt="Scanner Img"
            height="350vh"
          />
  
            <h2 className="hometext">Choose</h2>
            <h3 className="homepagetext">your payment method</h3>
       
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default UserSteps;
