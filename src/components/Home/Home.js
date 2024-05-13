import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Introduction from "./Introduction";
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
              I'M
              <strong className="main-name"> De Catelle Jonathan</strong>
            </h1>
            <div className="heading-type">
              <Type />
            </div>
            <div className="home-about-section">
              <p className="home-about-body">
                A 22-year-old computer science student. 
                My passion lies in exploring cutting-edge developments in the IT world. 
                With a background in Mobile and Enterprise Development, 
                I combine technical skills with a problem-solving mindset.
              </p>
            </div>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
