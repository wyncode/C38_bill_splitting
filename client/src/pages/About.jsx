import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import '../components/Footer';
import { Row, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

import './About.css';

const About = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <CardDeck>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body className="mb-10">
                <Card.Title className="about">Francesca Marquez</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card border="success" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Jeannie Torres</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card border="danger" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Sylvia Robles</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Row>
      </Container>
      <Container>
        <Row>
          <CardDeck>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Kevin Hermanni</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card border="success" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Samuel Robles</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">ICONS</small>
              </Card.Footer>
            </Card>
            <Card border="danger" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title className="about">Rodolfo Romero</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
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
