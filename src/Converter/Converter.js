import React, { useState, useEffect } from 'react';
import {
  Spin,
  Button,
  Card,
} from 'antd';

import NumInput from '../NumInput/NumInput';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import Result from '../Result/Result';

import 'antd/dist/antd.css';
import styles from './Converter.module.css';

const Converter = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currencies, setCurrencies] = useState({});
  const [baseValue, setBase] = useState('EUR');
  const [selectedCurrency, setToSelectedCurrency] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${baseValue}`)
      .then((response) => response.json())
      .then(({ rates, base }) => {
        setCurrencies(rates);
        setBase(base);
        setIsLoaded(true);
      })
      .catch(console.error);
  }, [baseValue]);

  const convert = () => {
    const coeff = currencies[selectedCurrency];
    setResult(inputValue * coeff);
  };

  return (
    <>
      <div className={styles.page}>
        <Card
          className={styles.card}
          title="Simple converter"
        >
          <div className={styles.spinner}>
            {
            isLoaded
              ? (
                <div className={styles.cardContent}>
                  <SelectCurrency
                    defaultValue={baseValue}
                    currencies={Object.keys(currencies)}
                    onCurrencySelect={setBase}
                  />
                  <NumInput className={styles.numInput} onChange={setInputValue} />
                  <SelectCurrency
                    defaultValue="Convert To"
                    currencies={Object.keys(currencies)}
                    onCurrencySelect={setToSelectedCurrency}
                  />
                  <Button
                    type="primary"
                    onClick={convert}
                  >
                    Convert
                  </Button>
                </div>
              ) : <Spin />
          }
          </div>
          <div>
            <Result
              input={inputValue} // спросить за ошибку
              fromCurrency={baseValue}
              toCurrency={selectedCurrency}
              result={result}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Converter;
