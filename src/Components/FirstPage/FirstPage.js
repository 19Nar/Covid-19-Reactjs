import React from "react";
import { Container, Row } from "reactstrap";

import Card from "./FirstPart/CodingCard/CardBlock";
import Map from "./SecondPart/CodingMap/Map";
import AllCases from "./ThirdPart/AllCases";
import Chart from "./FourthPart/CodingChart/Chart";

import "./FirstPage.css";

const FirstPage = () => (
  <div>
    <Container>
      <Row className="FirstPage">
        <Card />
        <Map />
        <AllCases />
        <Chart />
      </Row>
    </Container>
  </div>
);

export default FirstPage;
