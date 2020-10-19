import React, { useState, useEffect, createContext } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [globalRates, setRates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [baseValue, setBase] = useState('GBP');
  const [poundRates, setPoundRates] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getRates = async () => {
      const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${baseValue}`);
      const { rates } = await response.json();
      setRates(rates);

      if (baseValue === 'GBP') {
        setPoundRates(rates);
      }

      setIsLoading(false);
    };

    getRates().catch(console.error);
  }, [baseValue]);

  return (
    <CurrencyContext.Provider
      value={
        {
          globalRates,
          poundRates,
          isLoading,
          baseValue,
          setBase,
        }
      }
    >
      {children}
    </CurrencyContext.Provider>
  );
};
