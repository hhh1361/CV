import React, { Component, Fragment } from "react";
import "./main.css";

class Main extends Component {
  render() {
    const profile = this.props.profile;
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
          <h3>skills</h3>
          {profile.skills.map(element => {
            return (
              <Fragment key={element.sphere}>
                <h4>{element.sphere}</h4>
                <br />
                <p>{element.description}</p>
              </Fragment>
            );
          })}
        </section>
        <section className="section__code-examples">
          <h3>code examples</h3>
          <h4>{profile["code examples"]}</h4>
        </section>
        <section className="section__education">
          <h3>education</h3>
          <h4>{profile["education"]}</h4>
        </section>
        <section className="section__english-level">
          <h3>english level</h3>
          <h4>{profile["english level"]}</h4>
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
