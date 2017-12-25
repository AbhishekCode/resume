import React, { Component } from "react";

import Heading from "./common/Heading";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingBottom: 20
  }
};

export default class GeneralListSection extends Component {
  render() {
    const { headingText, data } = this.props;
    return (
      <div style={styles.container}>
        <Heading text={headingText} />
        <ul>{data.map(item => <li>{item}</li>)}</ul>
      </div>
    );
  }
}
