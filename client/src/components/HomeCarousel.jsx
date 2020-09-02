import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Deal1 from '../assets/Deal1.jpg';
import Deal2 from '../assets/Deal2.jpg';
import Deal3 from '../assets/Deal3.jpg';

const HomeCarousel = () => {
  return (
    <div>
      <Container>
      <h1>Cuenta Rewards</h1>
      <h5>Become a member and unlock rewards in your neighborhood.</h5>
      </Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Deal1}
            alt="First slide"
            style={{
              height: '80vh',
              position: 'relative',
              fontWeight: 'bold'
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Deal2}
            alt="Third slide"
            style={{
              height: '80vh',
              position: 'relative',
              fontWeight: 'bold'
            }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Deal3}
            alt="Third slide"
            style={{
              height: '80vh',
              position: 'relative',
              fontWeight: 'bold'
            }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
