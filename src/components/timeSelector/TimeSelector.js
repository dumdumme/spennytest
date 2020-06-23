import React from 'react';
import { useSelector } from 'react-redux';
import monthFormatter from '../../utils/monthFormatter';
import styles from './styles.module.css';

function TimeSelector() {
  const fetchedMonths = useSelector((state) => state.month);
  let formattedMonths = [];
  if (fetchedMonths) {
    formattedMonths = monthFormatter(fetchedMonths);
  }
  return (
    <div className={styles.tsWrapper}>
      {formattedMonths.map((item) => {
        const secondStyle = item.highlighted ? 'tsHighlighted' : '';
        return (
          <div
            key={item.value}
            className={`${styles.tsOption} ${styles[secondStyle]}`}
          >
            {item.value}
          </div>
        );
      })}
    </div>
  );
}

export default TimeSelector;
