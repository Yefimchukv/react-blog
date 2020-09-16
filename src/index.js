import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/rootReducer';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FullPagePost from './components/FullPagePost';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/page" component={FullPagePost} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
