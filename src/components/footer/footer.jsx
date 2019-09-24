import React, { Component, Fragment } from "react";

import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__text">
          <p>Created by</p>
          <p>Nikita Turlyko.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
