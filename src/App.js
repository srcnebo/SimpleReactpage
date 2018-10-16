import React, { Component } from "react";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
