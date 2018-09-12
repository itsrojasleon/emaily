import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

const store = createStore(
  () => [],
  applyMiddleware()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,    
  document.getElementById('root')
);