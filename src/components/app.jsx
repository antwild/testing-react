import React, { Component } from 'react'
import Nav from './nav'
import HomeText from './home-text'

class App extends Component {
  render() {
    return(
      <div className="main">
        <Nav />
        <HomeText />
      </div>
    );
  };
};

export default App
