import React, { useState } from 'react';
import { Card } from 'antd';
import { Switch, Route } from 'react-router-dom';

import Loader from 'components/Loader';
import Converter from 'components/Converter';
import Header from 'components/Header';
import useCurrencies from '../../useCurrencies';

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
    <Header />
    <div className={styles.page}>
      <Route path="/converter" component={App} />
      {/* <Card
        className={styles.card}
        title="Simple converter"
      >
        <App />
      </Card> */}
    </div>
  </>
);

export default AppWrapper;
