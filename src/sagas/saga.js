import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData } from '../redux/actions';
import fetchExpenses from '../services/fetchExpenses';

// eslint-disable-next-line no-unused-vars
function* getApiData() {
  try {
    const data = yield call(fetchExpenses);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log('Error while fetching expenses (getApiData): ', fetchExpenses);
  }
}

export default function* expenseSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
