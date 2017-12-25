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
  personalDetail: {
    marginLeft: 30,
    paddingBottom: 10
  },
  decalarationSign: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
};

export default class GeneralListSection extends Component {
  render() {
    const { data } = this.props;
    return (
      <div style={styles.container}>
        <Heading text={"PERSONAL DETAILS:"} />
        <div style={styles.personalDetail}>
          <div>{`Date of Birth: ${data.personalDetail.dob}`}</div>
          <div>{`Gender: ${data.personalDetail.gender}`}</div>
          <div>{`Relationship status: ${data.personalDetail.relationship}`}</div>
          <div>{`Permanent address: ${data.personalDetail.address}`}</div>
          <div>
            <span>Website: </span>
            <a target="_blank" href={data.personalDetail.website}>{`${data.personalDetail.website}`}</a>
          </div>
        </div>
        <Heading text={"DECLARATION:"} />
        <p> {data.declaration.text}</p>
        <div style={styles.decalarationSign}>
          <span>{`Place: ${data.declaration.place}`}</span> <span>{data.declaration.name}</span>
        </div>
      </div>
    );
  }
}
