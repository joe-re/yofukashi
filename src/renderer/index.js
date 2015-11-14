import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducers from './reducers';

const store = createStore(reducers);
console.log(store);
const rootElement = document.getElementById('application');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
