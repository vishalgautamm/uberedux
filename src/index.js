import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';

const middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store} >
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
