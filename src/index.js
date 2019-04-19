import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import { LocaleProvider } from 'antd';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './utils/redux/configureStore';
import LocaleProvider from './utils/providers/LocaleProvider';

export const store = configureStore();

const app = (
  <Provider store={store}>
    <LocaleProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LocaleProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
