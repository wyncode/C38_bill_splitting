import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand href="./">
        <img src="/logo.svg" width="30" height="30" alt="Cuentalogo" />
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Button href="./login" variant="link">
            Log In
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="./signup" variant="outline-primary">
            Sign Up
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
