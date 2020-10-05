import React from 'react';
import styles from './Result.module.css';

const Result = ({ input, fromCurrency, toCurrency, result }) => {
  if (!result) {
    return null;
  }

  return (
    <p className={styles.result}>
      {`Amount of ${toCurrency} in ${input} ${fromCurrency} is ${result.toFixed(2)}`}
    </p>
  );
};

export default Result;
