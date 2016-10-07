import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexLink, Link} from 'react-router';
import './index.css';

var destination = document.querySelector("#container");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>My Homepage</h1>
        <ul className="header">
          <li>Home</li>
          <li>Stuff</li>
          <li>Contact</li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Hello there, stranger.</h2>
        <p>What d’ya want?</p>
        <p>The owls are not what they seem.</p>
      </div>
    )
  }
});

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  destination
);
