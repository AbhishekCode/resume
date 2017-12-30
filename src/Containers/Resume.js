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

const padding = getWidth() * 0.05 > 20 ? 20 : getWidth() * 0.05;
const widthOfContent = getWidth() - padding * 2;

const styles = {
  container: {
    width: widthOfContent < 1024 ? widthOfContent : 1024,
    maxWidth: 1024,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: padding,
    wordWrap: "break-word",
    boxShadow: "0px 30px 33px 0px #8e9494"
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
