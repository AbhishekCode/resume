import React, { Component } from "react";

import Header from "../Components/Header";
import Summary from "../Components/Summary";
import Experience from "../Components/Experience";
import GeneralListSection from "../Components/GeneralListSection";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import resumedata from "./resumeData";
import { getHeight, getWidth } from "../helpers/config";
import resumeData from "./resumeData";

const styles = {
  container: {
    width: getWidth(),
    maxWidth: 1024,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff"
  }
};

export default class Resume extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header data={resumedata.header} />
        <Summary data={resumeData.summary} />
        <Experience data={resumeData.experience} />
        <GeneralListSection headingText={"EDUCATION:"} data={resumeData.education} />
        <GeneralListSection headingText={"TECHNICAL SKILLS:"} data={resumeData.skills} />
        <Projects data={resumeData.projects} />
        <Footer data={resumeData.footer} />
      </div>
    );
  }
}
