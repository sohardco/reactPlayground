import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Radio } from 'antd';
import { BankTwoTone } from '@ant-design/icons';

import styles from './Header.module.css';

const Header = ({ radioDefault, onRadioState }) => {
  const location = useLocation();

  const onChange = e => {
    onRadioState(e.target.value);
  };

  if (location.pathname === '/converter') {
    return (
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <BankTwoTone className={styles.icon} />
            <h2>Converter</h2>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <BankTwoTone className={styles.icon} />
          <h2>Converter</h2>
        </div>
      </Link>
      <div>
        <Radio.Group defaultValue={radioDefault} buttonStyle="solid" onChange={onChange}>
          <Radio.Button value="USD">USD</Radio.Button>
          <Radio.Button value="EUR">EUR</Radio.Button>
        </Radio.Group>
      </div>
      <Link to="/converter">
        <Button type="primary">Open Converter</Button>
      </Link>
    </div>
  );
};

export default Header;
