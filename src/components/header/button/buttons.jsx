import React, { Component, Fragment } from "react";
import "./buttons.css";

class Buttons extends Component {
  render() {
    return (
      <Fragment>
        {Object.keys(this.props.profile).map(function(element) {
          if (element !== "name") {
            return (
              <a
                key={element}
                className="header__container__button"
                href={`#section__${element}`}
              >
                {element}
              </a>
            );
          }
          return null;
        })}
      </Fragment>
    );
  }
}

export default Buttons;
