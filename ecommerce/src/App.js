import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

import Header from "./components/Layout/Header";
import Container from "react-bootstrap/Container";
import Music from "./components/Products/Music";
import Footer from "./components/Layout/Footer";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Container>
        <Routes>
          <Route
            path="store"
            element={
              <>
                <Cart />
                <Header />
                <h2>React App</h2>
                <Music />
                <Footer />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <Cart />
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
