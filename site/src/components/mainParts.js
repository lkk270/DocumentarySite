import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/navBar.css";
import Navbar from "../components/navBar";
import Section from "../components/section";

class mainParts extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Home"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={true}
          id="section1"
        />
        <Section
          title="Photos"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section2"
        />
        <Section
          title="Videos"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={true}
          id="section3"
        />
        <Section
          title="About"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={false}
          id="section4"
        />
        <Section
          title="Contact 5"
          subtitle={'sfsafasfasdfasdffafsdfasdfsad'}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default mainParts;