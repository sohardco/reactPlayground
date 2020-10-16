import React from 'react';
import { Spin } from 'antd';

import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.spinner}>
    <Spin />
  </div>
);

export default Loader;
