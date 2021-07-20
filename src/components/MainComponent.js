import React, { Component } from "react";

import Navbar from "./NavbarComponent";
import Landing from "./LandingComponent";
import Footer from "./FooterComponent";
import Menus from "./MenusComponent";
import Locations from "./LocationComponent";
import Bio from "./BioComponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/menus">
            <Menus />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
        </Switch>
        <Route path="//">
          <Landing />
        </Route>
        <Footer />
      </>
    );
  }
}

export default Main;
