import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "./components/App";
import Greeting from "./components/Greeting";
import SignupPage from "./components/signup/SignupPage";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
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