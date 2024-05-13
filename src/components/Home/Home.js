import React from "react";
import { Container, Row } from "react-bootstrap";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="home-header">
            <h1 style={{ paddingBottom: 15, paddingLeft: 0 }} className="heading">
              Hi There! 
            </h1>
            <h1 className="heading-name">
              I'm
              <strong className="main-name"> De Catelle Jonathan</strong>
            </h1>
            <div className="heading-type">
              <Type />
            </div>
            <div className="heading-contact">
              <h1>
                Contact Me:
              </h1>
              <p className="heading-contact-text">
                jonathandecatelle@gmail.com
              </p>
              <p className="heading-contact-text">
                +32 471 03 00 03
              </p>
            </div>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
