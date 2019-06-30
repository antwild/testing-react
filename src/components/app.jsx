import React, { Component } from 'react'
import Nav from './nav'
import HomeText from './home-text'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { background: 0 };
  }

  changeState = setTimeout(() => {
    this.setState({ background: 1 })
  }, 2000);

  bgc = () => {
    let background = [
        { backgroundImage: "url('https://bit.ly/2YnzrI6')" },
        { backgroundImage: "url('https://bit.ly/2xmOZQm')" },
        { backgroundImage: "url('https://bit.ly/2LtwwtI')" }
      ]
      if (this.state.background === 0) {
        return background[0];
        changeState()
      }
      else if (this.state.background === 1) {
        return background[1];
        this.setState({ background: 2 })
      }
  }



  render() {
    return(
      <div className="home-image" style={ this.bgc() }>
        <div className="main">
          <Nav />
          <HomeText />
        </div>
      </div>
    );
  };
};

export default App
