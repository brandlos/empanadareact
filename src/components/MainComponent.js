import React, { Component } from "react";
import Navbar from "./NavbarComponent";
import Landing from "./LandingComponent";
import Footer from "./FooterComponent";
import Menus from "./MenusComponent";
import Locations from "./LocationComponent";
import Bio from "./BioComponent";

class Main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landing />
        <Locations />
        <Menus />
        <Bio />
        <Footer />
      </>
    );
  }
}

export default Main;
