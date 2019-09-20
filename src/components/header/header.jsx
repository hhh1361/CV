import React, { Component } from "react";
import Buttons from "./button/buttons";
import "./header.css";

class Header extends Component {
  render() {
    const profile = this.props.profile;
    console.log(this.props.profile.contacts.vkontakte);
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__container__buttons">
            <Buttons profile={this.props.profile} />
          </div>
          <div className="header__container__info">
            <div className="info__name">
              <h2>{profile.name}</h2>
            </div>
            <div className="info__description">
              <p>Junior front-end developer</p>
            </div>
            <div className="info__communication">
              <a
                href={profile.contacts.vkontakte}
                target="_blank"
                rel="noopener noreferrer"
              >
                write me
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
