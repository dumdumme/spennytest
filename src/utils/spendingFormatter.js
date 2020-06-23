const { default: dateFormatter } = require('./dateFormatter');

const spendingFormatter = (spending) => {
  const spendingArray = Object.entries(spending);
  const formattedSpending = {
    category: spendingArray[0][0],
    amount: spendingArray[0][1],
    date: dateFormatter(spendingArray[1][1]),
  };
  return formattedSpending;
};

export default spendingFormatter;
