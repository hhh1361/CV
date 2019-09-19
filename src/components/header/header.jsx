import React, { Component } from "react";
import Button from "./button/button";

class Header extends Component {
  render() {
    return (
      <div className="header">
        {Object.keys(this.props.profile).map(function(element) {
          if (element !== "name") {
            return <Button key={element} text={element}></Button>;
          }
          return null;
        })}
      </div>
    );
  }
}

export default Header;
