import React from 'react';
import { Carousel } from 'react-bootstrap';

const UserSteps = () => {
  return (
    <div>
      <h1>How Cuenta Works</h1>
  <Carousel>
  <Carousel.Item>
    <img className="d-block"
      src={"https://res.cloudinary.com/jeanniet89/image/upload/c_limit,h_1335,w_882/v1598822858/Cuenta%20App/Scan_icon_nsmd6v.png"}
      alt="QR Scanner" height="350vh"
    />
    <Carousel.Caption>
    <h2 className="usertext">Scan</h2>
      <h3 className="usertext">the QR code in your receipt</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block"
      src={"https://res.cloudinary.com/jeanniet89/image/upload/c_limit,h_1335,w_882/v1598822858/Cuenta%20App/Select_active_icon_jo3ak1.png"}
      alt="Item Selection" height="350vh"
    />
    <Carousel.Caption>
      <h2 className="usertext">Select</h2>
      <h3 className="usertext">the items you ordered</h3>
    </Carousel.Caption>
    </Carousel.Item>
  <Carousel.Item>
    <img className="d-block"
      src={"https://res.cloudinary.com/jeanniet89/image/upload/c_limit,h_1335,w_882/Cuenta%20App/Payment_active_icon_n4zmhg.png"}
      alt="Scanner Img" height="350vh"
    />
    <Carousel.Caption>
    <h2 className="usertext">Choose</h2>
      <h3 className="usertext">your payment method</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
};

export default UserSteps;
