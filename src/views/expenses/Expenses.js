import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import Header from '../../components/header/Header';
import Expense from '../../components/expense/Expense';
import CardBalance from '../../components/cardBalance';
import ChartDataSelector from '../../components/chartDataSelector';
import ExpenseChart from '../../components/expenseChart/ExpenseChart';
import { requestApiData } from '../../redux/actions';
import spendingFormatter from '../../utils/spendingFormatter';
import chartDataFormatter from '../../utils/charDataFormatter';
import styles from './styles.module.css';

type ExpensesProps = {
  cardBalance: Number,
  data: Object,
};

function Expenses({ cardBalance, data }: ExpensesProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestApiData());
  }, [dispatch]);

  const spending = useSelector((state) => state.spending);

  let formattedSpending = [];
  let formattedChartData = [];

  if (spending !== undefined) {
    formattedSpending = spending.map((item) => {
      return spendingFormatter(item);
    });
  }

  if (data !== undefined) {
    formattedChartData = chartDataFormatter(data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header
          title="Expenses"
          buttonAction={() => console.log('Clicked Header Button')}
        />
      </div>
      <CardBalance balance={cardBalance} />
      <ChartDataSelector />
      <div style={{ marginBottom: '2rem' }}>
        <ExpenseChart chartData={formattedChartData} />
      </div>
      <div className={styles.breakdownContainer}>
        <div className={styles.breakdownTitle}>Spending Breakdown</div>
        {formattedSpending.length > 0 &&
          formattedSpending.map((item) => (
            <Expense
              key={item.category}
              category={item.category}
              date={item.date}
              amount={item.amount}
            />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cardBalance: state.cardBalance,
  spending: state.spending,
  data: state.data,
});

export default connect(mapStateToProps)(Expenses);
