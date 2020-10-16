import { useState, useEffect } from 'react';

const useCurrencies = (baseValue) => {
  const [rates, setRates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getRates = async () => {
      const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${baseValue}`);
      const { rates } = await response.json();
      setRates(rates);
      setIsLoading(false);
    };

    getRates().catch(console.error);
  }, [baseValue]);

  return [rates, isLoading];
};

export default useCurrencies;
