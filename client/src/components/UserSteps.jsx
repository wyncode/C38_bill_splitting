import React from 'react';
import { Figure } from 'react-bootstrap';
import Scanner from '../assets/Scanner.jpg';
import Items from '../assets/Items.png';

const UserSteps = () => {
  return (
    <div>
      <h1>How Cuenta Works</h1>
      <Figure className="container">
        <Figure.Image
          style={{ direction: 'center' }}
          width={171}
          height={180}
          alt="QR Scanner"
          src={Scanner}
        />
        <Figure.Caption>Scan the QR code in your receipt.</Figure.Caption>
      </Figure>
      <Figure className="container">
        <Figure.Image
          width={171}
          height={180}
          alt="Item Selection"
          src={Items}
        />
        <Figure.Caption>Select the items you ordered.</Figure.Caption>
      </Figure>
      <Figure className="container">
        <Figure.Image
          width={171}
          height={180}
          alt="Scanner Img"
          src={Scanner}
        />
        <Figure.Caption>Choose your payment method.</Figure.Caption>
      </Figure>
    </div>
  );
};

export default UserSteps;
