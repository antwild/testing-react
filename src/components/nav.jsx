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
      <p className="log-btn">Log in</p>
      </div>
    );
  };
};

export default Nav
