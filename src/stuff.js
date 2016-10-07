import React, { Component } from 'react';
import { Link } from 'react-router';

class Stuff extends Component {
  render() {
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
}

class StuffIWant extends Component {
  render() {
    return (
      <div>
        <p>Nothing. Nothing at all.</p>
      </div>
    );
  }
}


export { Stuff, StuffIWant };
