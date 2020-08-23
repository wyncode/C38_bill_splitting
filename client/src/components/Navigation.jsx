import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Sign In</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Log In</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
