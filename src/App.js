import React, { useState } from 'react';
import { Card } from 'antd';

import Loader from 'Loader';
import Converter from 'Converter';
import useCurrencies from './useCurrencies';

import 'antd/dist/antd.css';
import styles from './App.module.css';

const App = () => {
  const [baseValue, setBase] = useState('EUR');
  const [currencies, isLoading] = useCurrencies(baseValue);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Converter
      baseValue={baseValue}
      currencies={currencies}
      onDataReceive={setBase}
    />
  );
};

const AppWrapper = () => (
  <>
    <div className={styles.page}>
      <Card
        className={styles.card}
        title="Simple converter"
      >
      <App />
      </Card>
    </div>
  </>
);

export default AppWrapper;
