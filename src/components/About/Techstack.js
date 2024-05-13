import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
  SiCsharp,
  SiKotlin,
} from "react-icons/si";
import { 
  FaHtml5,
  FaCss3 ,
 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <p className="tech-icons-text purple">
          HTML
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
        <p className="tech-icons-text purple">
          CSS
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-icons-text purple">
          JavaScript
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-icons-text purple">
          Node.js
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-icons-text purple">
          React (native)
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-icons-text purple">
          Git
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="tech-icons-text purple">
          Firebase
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="tech-icons-text purple">
          PostgreSQL
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrMysql  />
        <p className="tech-icons-text purple">
          MySQL
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-icons-text purple">
          Python
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="tech-icons-text purple">
          Java
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p className="tech-icons-text purple">
          C#
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
        <p className="tech-icons-text purple">
          Kotlin
        </p>
      </Col>
    </Row>
  );
}

export default Techstack;
