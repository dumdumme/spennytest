import { RECEIVE_API_DATA } from './actions';

const expenseReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return { ...action.payload };
    default:
      return state;
  }
};

export default expenseReducer;
