import React from 'react';
import { Select } from 'antd';
import styles from './SelectCurrency.module.css';

const { Option } = Select;

const SelectCurrency = ({ defaultValue, currencies = [], onCurrencySelect, onDropdownOpen }) => (
  <Select
    showSearch
    className={styles.select}
    defaultValue={defaultValue}
    onSelect={onCurrencySelect}
    onChange={onDropdownOpen}
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
