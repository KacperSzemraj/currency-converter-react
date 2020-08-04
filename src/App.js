import React, { useState } from 'react';
import Header from "./Header";
import Container from "./Container";
import Form from "./Container/Form";
import Paragraph from "./Container/Paragraph";
import Result from "./Container/Result";
import Footer from "./Footer";
import { currencies } from './currencies';

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <>
      <Header title="Kalkulator Walutowy" />
      <Container>
        <Form
          calculateResult={calculateResult}
        />
        <Paragraph />
        <Result
          result={result}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;