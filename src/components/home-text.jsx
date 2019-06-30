import React, { Component } from 'react'

class HomeText extends Component {

  render() {
    return(
      <div className="main-text-wrap">
        <div className="main-text">
          <h1>Build safer with <span id="emerald">Emerald</span></h1>
          <div className="banner-p">
            <p>Create, monitor and manage your permits to reduce risks to worker safety, delays and to save money across all of your projects.</p>
          </div>
          <a href="" className="login-btn log-btn">Sign up</a>
        </div>
      </div>
    );
  };
};

export default HomeText
