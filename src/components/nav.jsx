import React, { Component } from 'react'

class Nav extends Component {

  render() {
    return(
      <div className="nav">
      <img
        className="logo"
        src="https://www.achat-cloud.fr/wp-content/uploads/cloud.png"
        alt="new"
      />
      <a className="log-btn">Log in</a>
      </div>
    );
  };
};

export default Nav
