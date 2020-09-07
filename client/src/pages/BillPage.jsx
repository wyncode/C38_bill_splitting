import React from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Container, Form, Jumbotron } from 'react-bootstrap';
import Footer from '../components/Footer';

const BillPage = () => {
  const history = useHistory();

  function handleScan(event) {
    if (event !== null) {
      history.push('/receipt');
    }
  }
  // listening to the onsubmit event and then
  function handleSubmit(event) {
    event.preventdefault();
    history.push('/receipt');
  }

  return (
    <>
      <Navigation />
      <br />
      <div className="justify-content-center mt-4 mb-4">
        <Jumbotron className="billpagejumbo">
          <Container className="d-flex flex-column align-items-center">
            <h2>Welcome to Cuenta!</h2>
            <h6>
              Please enter or scan your receipt code below to proceed to your
              bill.
            </h6>
            <Form
              style={{ width: 300 }}
              onSubmit={(event) => handleSubmit(event)}
            >
              <h4 className="d-flex flex-column align-items-center">
                Scan your code
              </h4>
              <QrReader
                className="justify-content-center"
                delay={1000}
                onScan={(event) => handleScan(event)}
              />
            </Form>
          </Container>
        </Jumbotron>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default BillPage;
