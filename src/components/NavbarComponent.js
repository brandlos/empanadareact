import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="App-header">
        <a href="/">EPB</a>
        <a href="/locations">Locations</a>
        <a href="/menus">Menus</a>
        <a href="/bio">Bio</a>
      </header>
    );
  }
}
export default Navbar;
