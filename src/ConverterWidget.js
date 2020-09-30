import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
} from 'antd';

import NumInput from './NumInput';
import SelectCurrency from './SelectCurrency';
import Result from './Result';

import 'antd/dist/antd.css';
import styles from './ConverterWidget.module.css';

const Converter = () => {
  const [currencies, setCurrencies] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then((response) => response.json())
      .then(({ rates }) => setCurrencies(rates))
      .catch(console.error);
  }, []);

  const convert = () => {
    const coeff = currencies[selectedCurrency];
    setResult(inputValue * coeff);
  }

  return (
    <>
      <Card title="Simple converter">
        <div className={styles.card}>
          <NumInput onChange={setInputValue} />
          <SelectCurrency
            currencies={Object.keys(currencies)}
            onCurrencySelect={setSelectedCurrency}
          />
          <Button
            type="primary"
            onClick={convert}
          >
            Convert
          </Button>
          <Result
            input={inputValue}
            currency={selectedCurrency}
            result={result}
          />
        </div>
      </Card>
    </>
  );
};

export default Converter;
