import React, { Component, Fragment } from "react";
import "./main.css";

class Main extends Component {
  render() {
    const profile = this.props.profile;
    return (
      <Fragment>
        <section>info</section>
        <section>skills</section>
        <section>code examples</section>
        <section>education</section>
        <section>english level</section>
        <section>contacts</section>
      </Fragment>
    );
  }
}

export default Main;
