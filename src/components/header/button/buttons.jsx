import React, { Component, Fragment } from "react";
import "./buttons.css";

class Buttons extends Component {
  render() {
    return (
      <Fragment>
        {Object.keys(this.props.profile).map(function(element) {
          if (element !== "name") {
            return (
              <button key={element} className="header__container__button">
                {element}
              </button>
            );
          }
          return null;
        })}
      </Fragment>
    );
  }
}

export default Buttons;
