import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
const rootNode =document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <App/>
  </Provider>,
);


reportWebVitals();
