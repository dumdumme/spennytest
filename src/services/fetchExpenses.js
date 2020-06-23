// eslint-disable-next-line consistent-return
const fetchExpenses = async () => {
  try {
    const fetchResult = await fetch(
      'https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439',
    );
    const expenses = await fetchResult.json();
    return expenses;
  } catch (error) {
    console.log('Error in fetchExpenses: ', error);
  }
};

export default fetchExpenses;
