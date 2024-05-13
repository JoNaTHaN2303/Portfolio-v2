import React from "react";
import { Container, Row } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row className="about-info-text">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am <strong className="purple">I</strong>?
            </h1>
            <div className="about-info-text-div">
              <p className="about-info-text-div-text">
                A 22-year-old computer science student. 
                My passion lies in exploring cutting-edge developments in the IT world. 
                With a background in Mobile and Enterprise Development, 
                I combine technical skills with a problem-solving mindset.
              </p>
            </div>
        </Row>
        <h1 className="project-heading">
          My Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
