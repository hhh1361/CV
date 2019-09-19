import React from "react";
import Header from "./components/header/header";
import profile from "./profile";

function App() {
  return (
    <div className="App">
      <Header profile={profile} />
    </div>
  );
}

export default App;
