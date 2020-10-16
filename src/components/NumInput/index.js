import React from 'react';
import { InputNumber } from 'antd';

const NumInput = ({ defaultValue = '', onChange }) => (
  <InputNumber
    min={1}
    defaultValue={defaultValue}
    onChange={onChange}
  />
);

export default NumInput;
