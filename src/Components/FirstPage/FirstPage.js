import React from "react";
import { Container, Row } from "reactstrap";

import Card from "./FirstPart/CodingCard/CardBlock";
import Map from "./SecondPart/CodingMap/Map";
import AllCases from "./ThirdPart/AllCases";

import "./FirstPage.css";

const FirstPage = () => (
  <div>
    <Container>
      <Row className="FirstPage">
        <Card />
        <Map />
        <AllCases />
      </Row>
    </Container>
  </div>
);

export default FirstPage;
