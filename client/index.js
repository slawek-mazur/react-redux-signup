import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "./components/App";
import Greeting from "./components/Greeting";
import SignupPage from "./components/signup/SignupPage";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router>
      <div className="container">
        <Route path="/" component={App}/>
        <Route exact path="/" component={Greeting}/>
        <Route exact path="/signup" component={SignupPage}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);