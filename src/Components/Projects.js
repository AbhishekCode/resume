import React, { Component } from "react";

import Heading from "./common/Heading";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingBottom: 20
  },
  project: { paddingBottom: 10 },
  datails: {
    marginLeft: 30
  }
};

export default class Projects extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        <Heading text={"SELECTED PROJECTS:"} />
        <div>
          {data.list.map(item => (
            <div style={styles.project}>
              <strong> {`${item.name}:`}</strong>
              <div style={styles.datails}>
                <div>
                  <strong>{"Description:"}</strong>
                  <span>{item.description}</span>
                </div>
                <div>
                  <strong>{"Language/Tools/Technologies:"}</strong>
                  <span>{item.tech}</span>
                </div>
                <div>
                  <strong>{"Contribution:"}</strong>
                  <span>{item.contribution}</span>
                </div>
                <div>
                  <strong>{"Website:"}</strong>
                  <a target="_blank" href={item.url}>
                    {item.url}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>{data.footnote} </div>
      </div>
    );
  }
}
