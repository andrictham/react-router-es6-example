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

var Stuff = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Stuff</h2>
        <p>Isn’t the world a wonderful place?</p>
        <p>Oh, if only I had more money! 💵 &nbsp;Then I could buy myself thse nice things:</p>
        <ol>
          <li>A Tesla</li>
          <li>That black <em>black</em> iPhone 7</li>
          <li>A holiday villa in Big Sur</li>
          <li>A private island in the Pacific Ocean</li>
        </ol>
        <h3> <Link to="/stuff/i-want" activeClassName="active">What more can a man want?</Link> </h3>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

var StuffIWant = React.createClass({
  render: function(){
    return(
      <div>
        <p>Nothing. Nothing at all.</p>
      </div>
    );
  }
});

var Contact = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Got a fucking problem?</h2>
        <p>The <em>eaaasiest</em> thing to do would be to tweet me at <a href="https://twitter.com/realDonaldTrump">@realDonaldTrump</a>.</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Router>
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
