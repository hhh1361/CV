import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  render() {
    return <div className="header__button">{this.props.text}</div>;
  }
}

export default Button;
