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
  },
  singleExper: {
    width: "100%",
    paddingBottom: 10
  },
  mainLine: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

export default class Experience extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        <Heading text={"PROFESSIONAL EXPERIENCE:"} />
        {data.list.map(item => {
          return (
            <div style={styles.singleExper}>
              <div style={styles.mainLine}>
                <div>
                  <strong>{item.company}</strong> - <span>{item.location} </span>
                </div>
                <span> {`${item.startDate} - ${item.endDate}`} </span>
              </div>
              <div>
                <strong>Role:</strong> <span>{item.role}</span>
              </div>
              {item.responsibilities && (
                <div>
                  <strong>Responsibilities:</strong>
                  <ul>{item.responsibilities.map(res => <li>{res}</li>)}</ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
