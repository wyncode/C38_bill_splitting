import React from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <Nav className="footer">
        <Nav.Link href="https://github.com/Jeanniet89" target="_blank">
          <Button id="button" variant="outline-primary">
            Jeannie
          </Button>
        </Nav.Link>
        <Nav.Link href="https://github.com/iamsam14" target="_blank">
          <Button id="button" variant="outline-primary">
            Samuel
          </Button>
        </Nav.Link>
        <Nav.Link href="https://github.com/Rrudy0513" target="_blank">
          <Button id="button" variant="outline-primary">
            Rodolfo
          </Button>
        </Nav.Link>
        <Nav.Link href="https://github.com/cescamar" target="_blank">
          <Button id="button" variant="outline-primary">
            Francesca
          </Button>
        </Nav.Link>
        <Nav.Link href="/" target="_blank">
          <Button id="button" variant="outline-primary">
            Sylvia
          </Button>
        </Nav.Link>
        <Nav.Link href="/" target="_blank">
          <Button id="button" variant="outline-primary">
            Kevin
          </Button>
        </Nav.Link>
      </Nav>
      <div className="container" mt-4>
        <p justifyContent="center">
          &copy;{new Date().getFullYear()} Cuenta INC | All right reserved |
          Terms of Service | Privacy
        </p>
      </div>
    </div>
  );
};

export default Footer;
