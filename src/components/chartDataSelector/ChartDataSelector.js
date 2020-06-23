import React from 'react';
import Dropdown from '../dropDown';
import TimeSelector from '../timeSelector';
import styles from './styles.module.css';

function ChartDataSelector() {
  return (
    <div className={styles.cdsWrapper}>
      <div className={styles.dropdownWrapper}>
        <Dropdown />
      </div>
      <TimeSelector />
    </div>
  );
}

export default ChartDataSelector;
