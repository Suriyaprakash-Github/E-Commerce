import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
      <Container className="justify-content-md-center">
        <Nav variant="pills">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </Nav>
      </Container>
      <HeaderCartButton />
    </Navbar>
  );
};

export default Header;
