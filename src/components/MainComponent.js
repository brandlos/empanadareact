import React, { Component } from "react";
import Navbar from "./NavbarComponent";
import Landing from "./LandingComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landing />
        <Footer />
      </>
    );
  }
}

export default Main;
