import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Container className="justify-content-md-center">
        <Nav variant="pills">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
        </Nav>
      </Container>
      <HeaderCartButton />
    </Navbar>
  );
};

export default Header;
