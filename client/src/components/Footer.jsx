import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Navbar className="footer mt-4">
        <Navbar.Brand href="/about" target="_blank" rel="noopener noreferrer">
          About us
        </Navbar.Brand>
        <div className="fticons">
          <a href="https://github.com/cescamar" target="_blank" rel="noopener noreferrer">
            <i 
              className="fas fa-envelope white-text ml-2"
              style={{ size: '3rem', color: 'white', width: '50px' }}
            ></i>
          </a>
          <a href="https://github.com/Jeanniet89" target="_blank" rel="noopener noreferrer">
            <i
              class="fab fa-twitter white-text ml-2"
              style={{ size: '3rem', color: 'white', width: '50px' }}
            ></i>
          </a>
          <a href="https://github.com/Rrudy0513" target="_blank" rel="noopener noreferrer">
            <i
              class="fas fa-camera white-text ml-2"
              style={{ size: '3rem', color: 'white', width: '50px' }}
            ></i>
          </a>
          <a href="https://github.com/iamsam14" target="_blank" rel="noopener noreferrer">
            <i
              class="fab fa-facebook white-text ml-2"
              style={{ size: '3rem', color: 'white', width: '50px' }}
            ></i>
          </a>
        </div>
        <Navbar.Collapse className="justify-content-center"></Navbar.Collapse>
        <div className="fticons">
          &copy;{new Date().getFullYear()} Copyright:
          <a href="/" style={{ color: 'white' }}> Cuenta.com</a>
        </div>
      </Navbar>
    </div>
  );
};

export default Footer;