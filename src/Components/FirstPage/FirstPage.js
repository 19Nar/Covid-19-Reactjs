import React from "react";
import { Container, Row } from "reactstrap";

import CardBlock from "./FirstPart/CardBlock/CardBlock";
import Map from "./SecondPart/Map/Map";
import AllCases from "./ThirdPart/AllCases";

import "./FirstPage.css";

const FirstPage = () => (
  <div>
     <Container>
      <Row className="FirstPage">
        <CardBlock />
        <Map />
        <AllCases />
      </Row>
    </Container>
  </div>
  );

export default FirstPage;
