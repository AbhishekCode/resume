import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Resume from "./Containers/Resume";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray"
  }
};
class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Resume />
      </div>
    );
  }
}

export default App;
