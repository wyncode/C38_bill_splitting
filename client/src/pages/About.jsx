import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Row, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Image from 'react-bootstrap/Image';

import '../App.css';

const About = () => {
  return (
    <>
      <Navigation />

      <Container className="container d-flex flex-column align-items-center justify-content-center">
        <h1>Our Team</h1>

        <Row>
          <CardDeck>
            <Card
              className="mt-5 mb-2"
              border="primary"
              style={{ width: '18rem' }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/jeanniet89/image/upload/v1599244982/IMG_5673_qq25if.png"
              />
              <Card.Body className="cardbody">
                <Card.Title className="about">Francesca Marquez</Card.Title>
                <Card.Text>
                  Francesca Marquez comes from a Marketing background with
                  experience in digital marketing, graphic design, and project
                  management. Her prior experience prepared her to wear many
                  hats and work in a cross functional team. She like to
                  challenge herself with difficult tasks and new experiences
                  while working with others to accomplish the goal. Her joy
                  comes from a sense of a job well done.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://www.linkedin.com/in/fmarq/"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235038/linkedin-vector-grey-4-38wm7d7w11ejnvjj4tyygw_eihgy5.png"
                    width="30px"
                    rounded
                  />
                </Card.Link>
                <Card.Link href="https://github.com/cescamar" target="_blank">
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235049/GitHub-Mark-64px_fncsh6.png"
                    width="25px"
                    rounded
                  />
                </Card.Link>
              </Card.Footer>
            </Card>
            <Card
              className="mt-5 mb-2"
              border="primary"
              style={{ width: '18rem' }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/jeanniet89/image/upload/v1599245681/Screen_Shot_2020-09-04_at_2.51.00_PM_kz8twr.png"
              />
              <Card.Body>
                <Card.Title className="about">Jeannie Torres</Card.Title>
                <Card.Text>
                  Jeannie is well versed in the Business world in the areas of
                  Management and Sales. Her extensive knowledge and experience
                  has prepared her with the ability to communicate with folks of
                  all backgrounds effectively, tackle any problems that may
                  present her way, as well as, the ability to challenge and
                  manage other by setting the bar high while lifting and
                  motivating those around her.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://www.linkedin.com/in/jeannie-torres-6628bb96/"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235038/linkedin-vector-grey-4-38wm7d7w11ejnvjj4tyygw_eihgy5.png"
                    width="30px"
                    rounded
                  />
                </Card.Link>
                <Card.Link href="https://github.com/Jeanniet89" target="_blank">
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235049/GitHub-Mark-64px_fncsh6.png"
                    width="25px"
                    rounded
                  />
                </Card.Link>
              </Card.Footer>
            </Card>
            <Card
              className="mt-5 mb-2"
              border="primary"
              style={{ width: '18rem' }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/jeanniet89/image/upload/v1599245976/Screen_Shot_2020-09-04_at_2.59.00_PM_dwmtcv.png"
              />
              <Card.Body>
                <Card.Title className="about">Sylvia Robles</Card.Title>
                <Card.Text>
                  Sylvia is a UXUI designer with a background in graphic design
                  and presentation design. She loves her dog Gizmo, Kpop and
                  pizza.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://www.linkedin.com/in/sylvia-robles-00112a18a/"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235038/linkedin-vector-grey-4-38wm7d7w11ejnvjj4tyygw_eihgy5.png"
                    width="30px"
                    rounded
                  />
                </Card.Link>
                <Card.Link href="http://sylviarobles.com/" target="_blank">
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235049/GitHub-Mark-64px_fncsh6.png"
                    width="25px"
                    rounded
                  />
                </Card.Link>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Row>
        <Row>
          <CardDeck>
            <Card
              className="mt-5 mb-5"
              border="primary"
              style={{ width: '18rem' }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/jeanniet89/image/upload/v1599423561/Kevin_Hermanni_Wyncode_yrff1q.png"
              />
              <Card.Body>
                <Card.Title className="about">Kevin Hermanni</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://www.linkedin.com/in/kevin-hermanni/"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235038/linkedin-vector-grey-4-38wm7d7w11ejnvjj4tyygw_eihgy5.png"
                    width="30px"
                    rounded
                  />
                </Card.Link>
                <Card.Link
                  href="https://maroon-icosahedron-93hg.squarespace.com/config/pages/5f11c996ff0da30cc8d5a901"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235049/GitHub-Mark-64px_fncsh6.png"
                    width="25px"
                    rounded
                  />
                </Card.Link>
              </Card.Footer>
            </Card>
            <Card
              className="mt-5 mb-5"
              border="primary"
              style={{ width: '18rem' }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/jeanniet89/image/upload/v1599244974/Screen_Shot_2020-09-04_at_2.37.44_PM_voudxc.png"
              />
              <Card.Body>
                <Card.Title className="about">Samuel Robles</Card.Title>
                <Card.Text>
                  Samuel has experience working in a fast-paced environment, is
                  a great communicator and is exceptional at working in a team
                  setting due to his background in the restaurant industry
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://www.linkedin.com/in/samuel-robles-30b2201b1/
"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235038/linkedin-vector-grey-4-38wm7d7w11ejnvjj4tyygw_eihgy5.png"
                    width="30px"
                    rounded
                  />
                </Card.Link>
                <Card.Link href="https://github.com/iamsam14" target="_blank">
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235049/GitHub-Mark-64px_fncsh6.png"
                    width="25px"
                    rounded
                  />
                </Card.Link>
              </Card.Footer>
            </Card>
            <Card
              className="mt-5 mb-5"
              border="primary"
              style={{ width: '18rem' }}
            >
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/jeanniet89/image/upload/v1599245681/Screen_Shot_2020-09-04_at_2.50.37_PM_fx6r3p.png"
              />
              <Card.Body>
                <Card.Title className="about">Rodolfo Romero</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link
                  href="https://www.linkedin.com/in/chefrudyromero/"
                  target="_blank"
                >
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235038/linkedin-vector-grey-4-38wm7d7w11ejnvjj4tyygw_eihgy5.png"
                    width="30px"
                    rounded
                  />
                </Card.Link>
                <Card.Link href="https://github.com/Rrudy0513" target="_blank">
                  <Image
                    src="https://res.cloudinary.com/jeanniet89/image/upload/v1599235049/GitHub-Mark-64px_fncsh6.png"
                    width="25px"
                    rounded
                  />
                </Card.Link>
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
