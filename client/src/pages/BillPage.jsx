import React from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Container, Form } from 'react-bootstrap';

const BillPage = () => {
  const history = useHistory();

  function handleScan(event) {
    if (event !== null) {
      history.push('/receipt');
    }
  }

  function handleSubmit(event) {
    event.preventdefault();
    history.push('/receipt');
  }

  return (
    <>
      <div>
        <Navigation />
      </div>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="title">Welcome to Cuenta!</h2>
        <h6 className="ml-2 mr-4 mb-4 mt-2">
          Please enter or scan your receipt code below to proceed to your bill.
        </h6>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group>
            <h4> Receipt code </h4>
            <Form.Control
              id="/"
              type="text"
              placeholder="abc123"
              name="QR code"
            />
          </Form.Group>
          <button type="submit">Submit</button>
          <h4> Scan code </h4>
          <QrReader
            className="justify-content-center"
            delay={1000}
            onScan={(event) => handleScan(event)}
            onError={() => {}}
          />
        </Form>
      </Container>
      <div id="billpg-imgContainer">
        <img
          className="billpg"
          src="https://res.cloudinary.com/jeanniet89/image/upload/v1599115917/Cuenta%20App/Cuenta_ribbon_dotted_circle_copy_krxqfe.png"
          alt="cuenta circle"
        />
      </div>
    </>
  );
};

export default BillPage;
