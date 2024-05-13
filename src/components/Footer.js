import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineLinkedin 
} from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/JoNaTHaN2303"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillGithub size={25}/>
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/jonathan-de-catelle-9399b620b/"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin size={25}/>
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:jonathandecatelle@gmail.com"
              style={{ color: "white" }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiOutlineMail size={25}/>
            </a>
          </li>
        </ul>
      </Row>
    </Container>
  );
}

export default Footer;
