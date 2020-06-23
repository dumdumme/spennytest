import React from 'react';
import Expenses from './views/expenses';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Expenses />
    </div>
  );
}

export default App;
