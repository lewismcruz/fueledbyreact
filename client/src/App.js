/* eslint-disable react/prefer-stateless-function */
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
// import BuildResume from "./components/Resume";
// import RenderContact from "./components/pages/Contact";


function App() {
  return <PortfolioContainer />;
}
export default App;




// ===== Use later when I understand how these work =====
//import React, { Component } from "react";
//import logo from "./logo.svg";
//import "./App.css";


// ===== Might reuse this code once I determine where or how it might be used ====
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


function BuildResume() {
  return <BuildResume />;
}
*/
