import React from 'react';
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Result from "./Result";

function App() {
  return (
    <>
      <Header title="Kalkulator Walutowy" />
      <Form />
      <Container />
      <Result />
      <Footer />
    </>
  );
}

export default App;
