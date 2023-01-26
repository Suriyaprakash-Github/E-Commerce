import React from "react";

import Header from "./components/Layout/Header";
import Container from "react-bootstrap/Container";
import Music from "./components/Products/Music";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Container>
      <Header />
      <h2>React App</h2>
      <Music />
      <Footer />
    </Container>
  );
}

export default App;
