import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router';
import Home from './home'
import { Stuff, StuffIWant } from './stuff'
import Contact from './contact'
import './index.css';

var destination = document.querySelector("#container");

class App extends Component{
  render() {
    return (
      <div>
        <h1>Create React App + React Router in ES6 Example</h1>
        <ul className="header">
          <li> <IndexLink to="/" activeClassName="active"> Home </IndexLink> </li>
          <li> <Link to="/stuff" activeClassName="active"> Stuff </Link> </li>
          <li> <Link to="/contact" activeClassName="active"> Contact </Link> </li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="stuff" component={Stuff}>
        <Route path="i-want" component={StuffIWant} />
      </Route>
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  destination
);
