import React, { useState } from 'react';
import { Button } from 'antd';

import Result from 'Result';
import NumInput from 'NumInput';
import SelectCurrency from 'SelectCurrency';

import styles from './Converter.module.css';

const Converter = ({ baseValue, currencies, onDataReceive }) => {
  const [selectedCurrency, setToSelectedCurrency] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const convert = () => {
    const coeff = currencies[selectedCurrency];
    setResult(inputValue * coeff);
  };

  const onDropdownOpen = () => {
    setResult('');
  };

  return (
    <>
      <div className={styles.cardContent}>
        <SelectCurrency
          defaultValue={baseValue}
          currencies={Object.keys(currencies)}
          onCurrencySelect={onDataReceive}
          onDropdownOpen={onDropdownOpen}
        />
        <NumInput className={styles.numInput} onChange={setInputValue} />
        <SelectCurrency
          defaultValue="Convert To"
          currencies={Object.keys(currencies)}
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
