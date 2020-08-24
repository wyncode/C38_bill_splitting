import React from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Button href="./" variant="link">
          Log In
        </Button>{' '}
      </Nav.Item>
      <Nav.Item>
        <Button href="./" variant="outline-primary">
          Sign Up
        </Button>{' '}
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
