import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Logo from '../assets/Logo.png';

const Navigation = () => {
  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand href="./">
        <img
          src={Logo}
          alt="Cuentalogo"
          style={{
            width: '100px'
          }}
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Button id="button" href="./login" variant="link">
            Log In
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="./signup" id="button" variant="outline-primary">
            Sign Up
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
