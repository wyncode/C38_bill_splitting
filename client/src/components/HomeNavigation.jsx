import React from 'react';
import Logo from '../assets/Logo.png';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BillPage from '../pages/BillPage';
// import Logout from './Logout';

const HomeNavigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        {/* TODO: need to go to home without logging out */}
        <Navbar.Brand href="./home">
          <img
            src={Logo}
            alt="Cuentalogo"
            style={{
              width: '100px'
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Dropdown drop="ownd" className="mr-1">
                <Dropdown.Toggle variant="">
                  <Image
                    src={'https://files.willkennedy.dev/wyncode/wyncode.png'}
                    height={50}
                    width={50}
                    roundedCircle
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">
                    Profile
                  </Dropdown.Item>
                  {/* <Logout /> */}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <BillPage />
    </>
  );
};

export default HomeNavigation;
