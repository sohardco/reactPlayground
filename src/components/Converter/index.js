import React, { useState, useContext } from 'react';
import { Card, Button } from 'antd';

import Result from 'components/Result';
import NumInput from 'components/NumInput';
import SelectCurrency from 'components/SelectCurrency';
import { CurrencyContext } from 'contexts/currency';

import styles from './Converter.module.css';

const Converter = () => {
  const { baseValue, globalRates, setBase } = useContext(CurrencyContext);
  const [selectedCurrency, setToSelectedCurrency] = useState('');
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState('');

  const convert = () => {
    const coeff = globalRates[selectedCurrency];
    setResult(inputValue * coeff);
  };

  const onDropdownOpen = () => {
    setResult('');
  };

  const onNumberInputChange = (value) => {
    if (result !== '') {
      setResult('');
    }
    setInputValue(value);
  };

  return (
    <>
      <div className={styles.cardContent}>
        <SelectCurrency
          defaultValue={baseValue}
          currencies={Object.keys(globalRates)}
          onCurrencySelect={setBase}
          onDropdownOpen={onDropdownOpen}
        />
        <NumInput className={styles.numInput} onChange={onNumberInputChange} />
        <SelectCurrency
          defaultValue="Convert To"
          currencies={Object.keys(globalRates)}
          onCurrencySelect={setToSelectedCurrency}
          onDropdownOpen={onDropdownOpen}
        />
        <div className={styles.convert}>
          <Button
            type="primary"
            onClick={convert}
          >
            Convert
          </Button>
        </div>
      </div>
      <div className={styles.result}>
        <Result
          input={inputValue}
          fromCurrency={baseValue}
          toCurrency={selectedCurrency}
          result={result}
        />
      </div>
    </>
  );
};

export default Converter;
