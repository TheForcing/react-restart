import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer, { rootSaga } from './modules';
import { createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)));
sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
