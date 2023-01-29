import React from "react";

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
        <Cart />
        <Header />
        <h2>React App</h2>
        <Music />
        <Footer />
      </Container>
    </CartProvider>
  );
}

export default App;
