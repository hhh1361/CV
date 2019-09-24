import React, { Component } from "react";
import Clock from "react-clock";
import Calendar from "react-calendar";
import "./main.css";

class Main extends Component {
  state = {
    background: 1,
    date: new Date()
  };

  onChange = date => this.setState({ date });

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    const profile = this.props.profile;
    function handleMouseEnter(e) {
      let id = "";
      if (e.target.id) {
        id = e.target.id;
      } else {
        id = e.target.parentNode.id;
      }
      const backgroundLayer = document.getElementById(`background${id}`);
      backgroundLayer.style.opacity = 1;
    }
    function handleMouseLeave(e) {
      let id = "";
      if (e.target.id) {
        id = e.target.id;
      } else {
        id = e.target.parentNode.id;
      }
      const backgroundLayer = document.getElementById(`background${id}`);
      backgroundLayer.style.opacity = 0;
    }

    return (
      <div className="main">
        <section className="section__about-me">
          <div className="section__about-me__photo" />
          <div className="section__about-me__information">
            <h2>About me</h2>
            <h4>{profile["about me"]}</h4>
          </div>
        </section>
        <section className="section__skills">
          <h2>skills</h2>
          <div className="section__skills__container" id="container">
            <div className="section__skills_background" id="backgroundCSS3" />
            <div className="section__skills_background" id="backgroundHTML5" />
            <div className="section__skills_background" id="backgroundJS" />
            <div className="section__skills_background" id="backgroundReact" />
            <div
              className="section__skills_background"
              id="backgroundTeamwork"
            />
            <div className="section__skills_background" id="backgroundBEM" />
            <div className="section__skills_background" id="backgroundESLint" />
            <div className="section__skills_background" id="backgroundGit" />
            {profile.skills.map(element => {
              return (
                <div
                  className="section__skills skill"
                  id={element.sphere}
                  key={element.sphere}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h4>{element.sphere}</h4>
                  <p>{element.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="section__education">
          <h2>education</h2>
          <div className="section__education__container">
            <div className="section__education__bsu-logo">
              <div className="bsu-logo logo"></div>
              <div className="bsu-text">{profile.education[0]}</div>
            </div>
            <div className="section__education__rs-logo">
              <div className="rs-logo logo"></div>
              <div className="rs-text">{profile.education[1]}</div>
            </div>
            <div className="section__education__english-logo">
              <div className="english-logo logo"></div>
              <div className="english-text">{profile.education[2]}</div>
            </div>
          </div>
        </section>
        <section className="section__my-projects">
          <h2>Projects</h2>
          <div className="section__my-projects__container">
            <a
              href="https://hhh1361.github.io/piskel-clone/"
              className="section__my-projects__piskel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p />
            </a>
            <a
              href="https://bcj.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="section__my-projects__bcj"
            >
              <p />
            </a>
          </div>
        </section>
        <section className="section__contacts">
          <h2>contacts</h2>
          <div className="section__contacts__container">
            <div className="clock">
              <Clock value={this.state.date} />
            </div>
            <ul className="section__contacts__list">
              <li className="ul section__contacts__list-item phone">
                <a href="">
                  <div className="phone-logo list-item-logo" />
                  <p className="phone-text list-item-text">+375(29)1887374</p>
                </a>
              </li>
              <li className="ul section__contacts__list-item email">
                <a href="https://gmail.com">
                  <div className="email-logo list-item-logo" />
                  <p className="email-text list-item-text">
                    nikita.turlyko@gmail.com
                  </p>
                </a>
              </li>
              <li className="ul section__contacts__list-item telegram">
                <a href="https://t.me/nikitaturlyko">
                  <div className="telegram-logo list-item-logo" />
                  <p className="telegram-text list-item-text">
                    t.me/nikitaturlyko
                  </p>
                </a>
              </li>
              <li className="ul section__contacts__list-item vk">
                <a href="https://vk.com/nikita.turlyko">
                  <div className="vk-logo list-item-logo" />
                  <p className="vk-text list-item-text">
                    vk.com/nikita.turlyko
                  </p>
                </a>
              </li>
              <li className="ul section__contacts__list-item instagram">
                <a href="https://www.instagram.com/nikitaturlyko/">
                  <div className="instagram-logo list-item-logo" />
                  <p className="instagram-text list-item-text">
                    instagram.com/nikitaturlyko
                  </p>
                </a>
              </li>
              <li className="ul section__contacts__list-item github">
                <a href="https://github.com/hhh1361">
                  <div className="github-logo list-item-logo" />
                  <p className="github-text list-item-text">
                    github.com/hhh1361
                  </p>
                </a>
              </li>
            </ul>
            <div className="calendar">
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                className="calendar"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
