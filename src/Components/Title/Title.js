import React, { useState } from "react";
import { Link } from "react-router-dom";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import "./Title.css";

const Title = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (

          <Navbar fixed="top" className="nav" light expand="md">
            <NavbarBrand>
              <Link className={"mx-3 link"} to="/">
                N.V.M. Covid-19 Tracker
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="link" to="/news">
                    News
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="link" to="/vaccination">
                    Vaccination
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
  );
};

export default Title;
