import React from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <Nav className="footer">
      <Nav.Link href="https://github.com/Jeanniet89" target="_blank">
        <Button id="button" variant="dark">
          Jeannie
        </Button>
      </Nav.Link>
      <Nav.Link href="https://github.com/iamsam14" target="_blank">
        <Button id="button" variant="dark">
          Samuel
        </Button>
      </Nav.Link>
      <Nav.Link href="https://github.com/Rrudy0513" target="_blank">
        <Button id="button" variant="dark">
          Rodolfo
        </Button>
      </Nav.Link>
      <Nav.Link href="https://github.com/cescamar" target="_blank">
        <Button id="button" variant="dark">
          Francesca
        </Button>
      </Nav.Link>
      <Nav.Link href="/" target="_blank">
        <Button id="button" variant="dark">
          Sylvia
        </Button>
      </Nav.Link>
      <Nav.Link href="/" target="_blank">
        <Button id="button" variant="dark">
          Kevin
        </Button>
      </Nav.Link>
    </Nav>
  );
};

export default Footer;
