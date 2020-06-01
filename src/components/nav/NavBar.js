import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  
  const isDisabled = (location, path) => {
    console.log("################################")
    console.log(location, path)
    if (location === path) {
      console.log(true)
      return true
    } else {
      console.log(false)
      return false 
    }
  }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className={`nav-link ${isDisabled(window.location.pathname, "/")}`} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`nav-link ${isDisabled(window.location.pathname, "/animals")}`} to="/animals">
              Animals
            </Link>
          </li>
          <li>
            <Link className={`nav-link ${isDisabled(window.location.pathname, "/locations")}`} to="/locations">
              Locations
            </Link>
          </li>
          <li>
            <Link className={`nav-link ${isDisabled(window.location.pathname, "/owners")}`} to="/owners">
              Owners
            </Link>
          </li>
          <li>
            <Link className={`nav-link ${isDisabled(window.location.pathname, "/employees")}`} to="/employees">
              Employees
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);