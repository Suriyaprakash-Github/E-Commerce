import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

import Header from "./components/Layout/Header";
import Container from "react-bootstrap/Container";
import Music from "./components/Products/Music";
import Footer from "./components/Layout/Footer";
import ProductDetail from "./components/Pages/ProductDetails";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ContactUs from "./components/Pages/ContactUs";

function App() {
  return (
    <CartProvider>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
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
            path="/products/:product_id"
            element={<ProductDetail />}
          ></Route>
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
            path="contactus"
            element={
              <>
                <Cart />
                <Header />
                <ContactUs />
                <Footer />
              </>
            }
          />

          <Route
            path="/home"
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
