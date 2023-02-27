import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import LoginContext from "./../../store/LoginContext";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(LoginContext);
  const history = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    history("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
      <Container className="justify-content-md-center">
        <Nav variant="pills" className={classes.nav}>
          <NavLink className={classes.link} to="/home">
            Home
          </NavLink>
          <NavLink className={classes.link} to="/about">
            About
          </NavLink>
          <NavLink className={classes.link} to="/store">
            Store
          </NavLink>
          <NavLink className={classes.link} to="/contactus">
            Contact Us
          </NavLink>
          {!authCtx.isLoggedIn ? (
            <NavLink className={classes.link} to="/Login">
              Login
            </NavLink>
          ) : (
            <button className={classes.logoutBtn} onClick={logoutHandler}>
              {" "}
              Logout{" "}
            </button>
          )}
        </Nav>
      </Container>
      <HeaderCartButton />
    </Navbar>
  );
};

export default Header;
