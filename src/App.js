import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

import Loader from 'Loader';
import Converter from 'Converter';

import 'antd/dist/antd.css';
import styles from './App.module.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currencies, setCurrencies] = useState({});
  const [baseValue, setBase] = useState('EUR');

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

  return (
    <>
      <div className={styles.page}>
        <Card
          className={styles.card}
          title="Simple converter"
        >
          {isLoaded
            ? (
              <Converter
                baseValue={baseValue}
                currencies={currencies}
                onDataReceive={setBase}
              />
            )
            : <Loader />}
        </Card>
      </div>
    </>
  );
};
export default App;
