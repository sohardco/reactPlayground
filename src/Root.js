import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import { CurrencyProvider } from 'contexts/currency';

const Root = () => (
  <Router>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </Router>
);

export default Root;
