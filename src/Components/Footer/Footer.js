import React from "react";
import { Container, Row, Col } from "reactstrap";

import facebook from "./icons/facebook.jpg";
import insta from "./icons/insta.jpg";
import call from "./icons/call.jpg";
import twitter from "./icons/twitter.jpg";
import domain from "./icons/domain.jpg";
import linkedin from "./icons/linkedin.jpg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <span>
        <Container>
          <Row>
            <Col className="social" xs="12" sm="12" md="12" lg="12" xl="12">
              <a href="https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US%3Aen">
                <img src={facebook} alt="" />
              </a>
              <a href="https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US%3Aen">
                <img src={insta} alt="" />
              </a>
              <a href="https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US%3Aen">
                <img src={call} alt="" />
              </a>
              <a href="https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US%3Aen">
                <img src={twitter} alt="" />
              </a>
              <a href="https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US%3Aen">
                <img src={domain} alt="" />
              </a>
              <a href="https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US%3Aen">
                <img src={linkedin} alt="" />
              </a>
            </Col>
         
        <Col className="footer" xs="12" sm="12" md="12" lg="12" xl="12">
        <a href="/">© N.V.M. Covid-19 Tracker, 2020</a>
        </Col>
        </Row>
        </Container>
      </span>
    </div>
  );
};

export default Footer;
