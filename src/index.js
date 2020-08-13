import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './components/App';
import './index.css';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from './persistence/localStorage';

const loggerMiddleware = createLogger();

const persistedState = loadState();

let store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
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
