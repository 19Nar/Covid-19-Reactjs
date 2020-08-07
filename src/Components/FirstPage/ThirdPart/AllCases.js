import React from "react";
import { Col } from "reactstrap";

import DailySummary from "./DailySummary/DailySummary";
import Recovered from "./Recovered/Recovered";
import Confirmed from "./Confirmed/Confirmed";
import TotalDeaths from "./TotalDeaths/TotalDeaths";

const  AllCases = () => (
    <Col className={"Cases"}>
      <Col>
        <DailySummary />
      </Col>
      <Col>
        <Confirmed />
      </Col>
      <Col>
        <Recovered />
      </Col>
      <Col>
        <TotalDeaths />
      </Col>
    </Col>
  );

export default AllCases;
