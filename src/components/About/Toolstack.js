import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { GrWindows } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GrWindows />
        <p className="tech-icons-text purple">
          Windows
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-icons-text purple">
          Visual Studio Code
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <p className="tech-icons-text purple">
          Github
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-icons-text purple">
          Postman
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="tech-icons-text purple">
          Vercel
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
