import { Col, Container, Row } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import React from "react";
import carteblanche from "../../Assets/Projects/carteblanche.PNG";
import cocktails from "../../Assets/Projects/cocktails.PNG";
import hypeodream from "../../Assets/Projects/hypeodream.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cocktails}
              title="Cocktails"
              description="I initially created a prototype for a school assignment. However, upon completing the first version, I believed I could enhance it further. That's why I decided to start over and refine this website. In doing so, I explored alternative technologies, opting for Sanity instead of a Node.js API, to elevate the website's performance."
              ghLink="https://github.com/JoNaTHaN2303/cockatils_v2"
              demoLink="https://cockatils-v2.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carteblanche}
              title="Carte Blanche"
              description="I created this website for a friend who recently launched his own business. He desired a website that captivated people's attention while encapsulating the essence of his enterprise's theme."
              ghLink="https://github.com/JoNaTHaN2303/carteblanche"
              demoLink="https://mecarteblanche.be/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hypeodream}
              title="Hype-O-Dream"
              description="As an intern, I further expanded the mobile application for the Hype-O-Dream festival in Waregem for the 2023 edition."
              ghLink="https://play.google.com/store/apps/details?id=com.encoregroupvzw.hypeodream2019Prd"
              demoLink="https://play.google.com/store/apps/details?id=com.encoregroupvzw.hypeodream2019Prd"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
