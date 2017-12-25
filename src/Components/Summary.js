import React, { Component } from "react";

import Heading from "./common/Heading";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20
  }
};

export default class Summary extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        <Heading text={"PROFILE SUMMARY:"} />
        <span>{data.description}</span>
        <ul>{data.list.map(item => <li>{item}</li>)}</ul>
      </div>
    );
  }
}
