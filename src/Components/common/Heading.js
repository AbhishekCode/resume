import React, { Component } from "react";

const styles = {
  heading: {
    fontWeight: "bold",
    textDecoration: "underline",
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default class heading extends Component {
  render() {
    const { text } = this.props;
    return <div style={styles.heading}> {`${text}:`}</div>;
  }
}
