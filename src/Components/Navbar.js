import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1
            style={{ marginRight: "2rem", color: "white", cursor: "pointer" }}
          >
            Movies App
          </h1>
        </Link>
        <Link to="/favourites" style={{ textDecoration: "none" }}>
          <h3 style={{ color: "white", cursor: "pointer" }}>Favourites</h3>
        </Link>
      </div>
    );
  }
}
