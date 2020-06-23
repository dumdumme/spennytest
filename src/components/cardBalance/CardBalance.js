import React from 'react';
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';
import styles from './styles.module.css';

type cardBalance = {
  balance: Number,
};

function CardBalance({ balance }: cardBalance) {
  return (
    <div className={styles.container}>
      <div className={styles.cardBalance}>
        <span className={styles.heading}>Card Balance</span>
        <span className={styles.balanceAmount}>${balance}</span>
      </div>
      <div className={styles.balanceChange}>
        <div className={styles.upContainer}>
          <img src={upArrow} alt="" style={{ width: '22px' }} />
          <span className={styles.upAmount}>$3,214</span>
        </div>
        <div className={styles.downContainer}>
          <img src={downArrow} alt="" style={{ width: '22px' }} />
          <span className={styles.downAmount}>$1,168</span>
        </div>
      </div>
    </div>
  );
}

export default CardBalance;
