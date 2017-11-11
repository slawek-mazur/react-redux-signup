import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "./components/App";
import Greeting from "./components/Greeting";
import SignupPage from "./components/signup/SignupPage";

render(
  <Router>
    <div className="container">
      <Route path="/" component={App}/>
      <Route exact path="/" component={Greeting} />
      <Route exact path="/signup" component={SignupPage} />
    </div>
  </Router>,
  document.getElementById('app')
);