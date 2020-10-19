import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from 'components/Loader';
import Converter from 'components/Converter';
import Header from 'components/Header';
import RateDisplay from 'components/RateDisplay';
import { CurrencyContext } from 'contexts/currency';

const App = () => {
  const { poundRates, isLoading } = useContext(CurrencyContext);
  const [radioState, setRadioState] = useState('USD');

  if (isLoading) {
    return (
      <>
        <Header
          radioDefault={radioState}
        />
        <Loader />
        ;
      </>
    );
  }

  return (
    <>
      <Header
        radioDefault={radioState}
        onRadioState={setRadioState}
      />
      <Switch>
        {/* <div className={styles.page}> */}
        <Route exact path="/">
          <RateDisplay
            radioState={radioState}
            poundRates={poundRates}
          />
        </Route>
        <Route exact path="/converter" component={Converter} />
        {/* </div> */}
      </Switch>
    </>
  );
};

export default App;
