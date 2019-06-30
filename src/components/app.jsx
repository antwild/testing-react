import React, { Component } from 'react'
import Nav from './nav'
import HomeText from './home-text'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { background: 1 };
  }

  classes = () => {
    let thisClass = "home-image";
    if (this.state.background === 1) {
      thisClass += " img-one";
      setTimeout(() => {this.setState({ background: 2 })}, 5000);
    } else if (this.state.background === 2) {
      thisClass += " img-two";
      setTimeout(() => {this.setState({ background: 3 })}, 5000);
    } else if (this.state.background === 3) {
      thisClass += " img-three";
      setTimeout(() => {this.setState({ background: 1 })}, 5000);
    }
    return thisClass;
  };

  render() {
    return(
      <div className={this.classes()}>
        <div className="main">
          <Nav />
          <HomeText />
        </div>
      </div>
    );
  };
};

export default App
