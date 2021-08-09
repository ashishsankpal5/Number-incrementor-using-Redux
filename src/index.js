import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './store';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </CssBaseline>
  </React.StrictMode>,
  document.querySelector('#root')
);
