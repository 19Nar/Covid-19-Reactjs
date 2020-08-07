import React from 'react';
import { Col } from "reactstrap";

import FetchCardResults from "./FetchCardResults";

import "./CardBlock.css"

const CardBlock = () =>  (
        <Col className={"Card"} xs="12" sm="12" md="3" lg="3" xl="3">
        < FetchCardResults />
      </Col>
    )

export default CardBlock;