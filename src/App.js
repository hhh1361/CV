import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import profile from "./profile";
import "./App.css";

function App() {
  window.addEventListener("scroll", function(event) {
    let topDistance = window.pageYOffset;
    let layers = document.querySelectorAll("div.layer");
    layers.forEach(function(layer) {
      let depth = layer.getAttribute("depth");
      let movement = -(topDistance * depth);
      let translate3d = "translate3d(0, " + movement + "px, 0)";
      layer.style.transform = translate3d;
    });
  });

  return (
    <div className="App">
      <div id="hero">
        <div className="layer layer-01" depth="0.3"></div>
        <div className="layer layer-02" depth="0.5"></div>
        <div className="layer layer-03" depth="0.7"></div>
        <div className="layer layer-04" depth="0.8"></div>
        <div className="layer layer-05" depth="1"></div>
      </div>
      <Header profile={profile} />
      <Main profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}

export default App;
