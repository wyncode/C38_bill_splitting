import React from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Nav className="footer">
        <Nav.Link href="./about" target="_blank">
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
        <p justifyContent="center">
          &copy;{new Date().getFullYear()} Cuenta INC | Handcrafted with love by
          | Contributors |
        </p>
      </Nav>
    </div>
  );
};

export default Footer;
