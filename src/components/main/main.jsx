import React, { Component } from "react";
import "./main.css";

class Main extends Component {
  state = {
    background: 1
  };

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
            <div className="section__education__bsu-logo logo"></div>
            <div className="section__education__rs-logo logo"></div>
          </div>
        </section>
        <section className="section__english-level">
          <h2>english level</h2>
          <h4>{profile["english level"]}</h4>
        </section>
        <section className="section__my-projects">
          <h3>code examples</h3>
          <h4>smth</h4>
        </section>
        {/* <section className="section__contacts">
          <h3>contacts</h3>
          <h4>{profile["contacts"]}</h4>
        </section> */}
      </div>
    );
  }
}

export default Main;
