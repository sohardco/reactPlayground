import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectCurrency = ({ currencies = [], onCurrencySelect }) => (
  <Select
    defaultValue="Please,choose currency to convert to"
    onChange={onCurrencySelect}
  >
    {currencies.map((currency) => (
      <Option
        key={currency}
        value={currency}
      >
        {currency}
      </Option>
    ))}
  </Select>
);


export default SelectCurrency;
