import React, { Component, Fragment } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    const profile = this.props.profile;
    return (
      <Fragment>
        <div>
          created by {profile.name}. <br />
          all rights reserved
        </div>
      </Fragment>
    );
  }
}

export default Footer;