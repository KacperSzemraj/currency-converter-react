import React from 'react';
import Header from "./Header";
import Container from "./Container";
import Form from "./Container/Form";
import Paragraph from "./Container/Paragraph";
import Result from "./Container/Result";
import Footer from "./Footer";
import { currencies } from './currencies';

function App() {
  return (
    <>
      <Header title="Kalkulator Walutowy" />
      <Container>
        <Form />
        <Paragraph />
        <Result />
      </Container>
      <Footer />
    </>
  );
}

export default App;
