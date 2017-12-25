import React, { Component } from "react";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 20,
    borderBottom: "1px solid black"
  },
  columnLeft: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  columnRight: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end"
  }
};

export default class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.columnLeft}>
          <strong>{data.name} </strong>
          <span>{data.address} </span>
          <span>{data.contactNumber} </span>
        </div>
        <div style={styles.columnRight}>
          <span>{data.email} </span>
          <a target="_blank" herf={data.github}>
            {data.github}
          </a>
        </div>
      </div>
    );
  }
}
