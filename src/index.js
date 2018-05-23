import React from 'react';
import App from './App';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/CreateStore';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
