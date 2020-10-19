import React from 'react';

import styles from './RateDisplay.module.css';

const RateDisplay = ({ poundRates, radioState }) => (
  <div className={styles.rate}>
    <h1>
      Today rate for 1 GBP is {poundRates[radioState].toFixed(2)} {radioState}
    </h1>
  </div>
);

export default RateDisplay;
