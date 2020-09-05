import React from 'react';
import QrReader from 'react-qr-reader';
import Navigation from '../components/Navigation';
import { Container, Form} from 'react-bootstrap';

const BillPage = () => {
  function handleScan(event) {
    console.log('Event: ', event);
    if (event !== null) {
      // API call using event. If call is true then update context/save onto session storage
      //    and push me to next page

      console.log('I am no longer null');
    }
  }
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="title">Welcome to Cuenta!</h2>
        <h6 className="ml-2 mr-4 mb-4 mt-2">
          Please enter your receipt code below to proceed to your bill
        </h6>
        <Form style={{ width: 300 }}>
          <Form.Group>
            <Form.Label htmlFor="email">Receipt code</Form.Label>
            <Form.Control
              id="/"
              type="text"
              placeholder="abc123"
              name="QR code"
            />
          </Form.Group>
          <h3>QR code</h3>
          <QrReader className="justify-content-center"
          delay={1000}
          onScan={(event) => handleScan(event)}
          style={{ width: '300px' }} />
       </Form>
      </Container>
    </>
  );
};

export default BillPage;
