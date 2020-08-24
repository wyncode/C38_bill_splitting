import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>JOIN OUR MAILING LIST</h3>
      <p>SPLIT BILL GOES HERE</p>
      <Form className="footer-form">
        <div className="inputs">
          <Form.Group controlId="formBasicName" className="input-box">
            <Form.Control type="name" placeholder="Enter your Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="input-box">
            <Form.Control type="email" placeholder="Enter your Email" />
          </Form.Group>
        </div>
        <div className="submit-agreement">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Sign me up" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" className="submit_button">
            Submit
          </Button>
        </div>
      </Form>
    </footer>
  );
};

export default Footer;
