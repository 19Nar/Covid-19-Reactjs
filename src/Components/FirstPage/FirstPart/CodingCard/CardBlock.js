import React from 'react';
import { Col } from "reactstrap";

import FetchCardResults from "./FetchCardResults";

import "../DesignCard/CardBlock.css"

const CardBlock = () =>  (
        <Col className= "CardBlock" xs="12" sm="12" md="3" lg="3" xl="3">
          Countries
        < FetchCardResults />
      </Col>
    )

export default CardBlock;