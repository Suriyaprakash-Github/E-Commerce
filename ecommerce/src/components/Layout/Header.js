import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import LoginContext from "./../../store/LoginContext";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const authCtx = useContext(LoginContext);
  const history = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    history("/Login");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
      <Container className="justify-content-md-center">
        <Nav variant="pills">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
          <NavLink to="/Login">LOGIN</NavLink>
          <button onClick={logoutHandler}> Logout </button>
        </Nav>
      </Container>
      <HeaderCartButton />
    </Navbar>
  );
};

export default Header;
