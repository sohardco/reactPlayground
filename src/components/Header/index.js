import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Radio } from 'antd';
import { BankTwoTone } from '@ant-design/icons';

import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  if (location.pathname === '/converter') {
    return (
      <div className={styles.logo}>
        <Link to="/">
          <div>
            <BankTwoTone />
            <h3>Converter</h3>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <div>
          <BankTwoTone />
          <h3>Converter</h3>
        </div>
      </Link>
      <div>
        <Radio.Group defaultValue="USD" buttonStyle="solid">
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
