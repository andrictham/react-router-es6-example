import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello there, stranger.</h2>
        <p>This is an example project based on <a href="https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm" target="_blank">Kirupa’s</a> great tutorial on setting up React Router.</p>
        <p>This example is adapted to use <a href="https://github.com/facebookincubator/create-react-app" target="_blank">create-react-app</a>, React Router v2, with components written in ES6 classes.</p>
        <p>It acts as a modern starting point for spinning up simple React prototypes, with sensible styling that uses system fonts. Read more about the system font stack <a href="https://bitsofco.de/the-new-system-font-stack/" target="_blank">here</a>.</p>
        <h4>Feel free to <a href="https://github.com/andrictham/react-router-kirupa" target="_blank">fork this</a> for your own use.</h4>
      </div>
    );
  }
}

export default Home;
