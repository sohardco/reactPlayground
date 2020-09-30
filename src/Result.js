import React from 'react';

const Result = ({ input, currency, result }) => {
  if (!result) {
    return null;
  }

  return (
    <p>
      {`Amount of ${currency} in ${input} USD is ${result.toFixed(2)}`}
    </p>
  );
};

export default Result;
