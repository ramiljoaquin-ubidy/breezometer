import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './components/App';
import './index.css';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from './persistence/localStorage';
import DevTools from './containers/DevTools';

const preloadedState = loadState();

const store = createStore(
  rootReducer,
  preloadedState,
  compose(applyMiddleware(thunk, createLogger()))
);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
