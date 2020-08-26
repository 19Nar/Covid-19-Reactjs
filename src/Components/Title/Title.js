import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "./logo.png";

import "./Title.css";

const Title = () => {

    return (
      <Container className="p-0" fluid={true}>
        <Navbar sticky="top" className="border-bottom nav" expand="lg">
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="logo"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle className="navbar" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/news">
                News
              </Link>
              <Link className="nav-link" to="/vaccination">
                Vaccination
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
};

export default Title;
