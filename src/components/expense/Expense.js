import React from 'react';
import fuel from '../../assets/fuel.png';
import shopping from '../../assets/shopping.png';
import styles from './styles.module.css';

type ExpenseProps = {
  category: String,
  date: String,
  amount: String,
};

// Reusing images for unmatched categories
const imageToRender = {
  Shopping: shopping,
  Rent: fuel,
  Bills: shopping,
};

function Expense({ category, date, amount }: ExpenseProps) {
  // const dateObject = new Date(date * 1000);
  return (
    <div className={styles.container}>
      <img
        src={imageToRender[category]}
        alt=""
        style={{ width: '2.5rem', margin: '0.5rem' }}
      />
      <div className={styles.dateCatWrapper}>
        <div className={styles.category}>{category}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <span className={styles.amount}>- ${amount}</span>
    </div>
  );
}

export default Expense;
