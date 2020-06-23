import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import expenseReducer from './redux/expenseReducer';
import expenseSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  expenseReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(expenseSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
