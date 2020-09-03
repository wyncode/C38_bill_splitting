import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import '../components/Footer';
import { Row, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

import '../App.css';

const About = () => {
  return (
    <>
      <Navigation />
      <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <Row>
          <CardDeck>
            <Card
              className="mt-5 mb-2"
              border="primary"
              style={{ width: '18rem' }}
            >
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Francesca Marquez</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card
              className="mt-5 mb-2"
              border="success"
              style={{ width: '18rem' }}
            >
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Jeannie Torres</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card
              className="mt-5 mb-2"
              border="danger"
              style={{ width: '18rem' }}
            >
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Sylvia Robles</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Row>
        <Row>
          <CardDeck>
            <Card className="mt-5" border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Kevin Hermanni</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card className="mt-5" border="success" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Samuel Robles</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card className="mt-5" border="danger" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Rodolfo Romero</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;
