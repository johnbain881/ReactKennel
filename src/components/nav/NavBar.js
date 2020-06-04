import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  
  const isDisabled = (location, path) => {
    if (location === path) {
      return true
    } else {
      return false 
    }
  }

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
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
          {props.hasUser
          ? <li>
              <Link className={`nav-link ${isDisabled(window.location.pathname, "/animals")}`} to="/animals">
                Animals
              </Link>
            </li>
          : null}
          <li>
            <Link className={`nav-link ${isDisabled(window.location.pathname, "/locations")}`} to="/locations">
              Locations
            </Link>
          </li>
          {props.hasUser
          ? <li>
              <Link className={`nav-link ${isDisabled(window.location.pathname, "/owners")}`} to="/owners">
                Owners
              </Link>
            </li>
          
          : null}
          {props.hasUser
          ? <li>
              <Link className={`nav-link ${isDisabled(window.location.pathname, "/employees")}`} to="/employees">
                Employees
              </Link>
            </li>
          : null}
          {!props.hasUser
          ? <li>
              <Link className={`nav-link ${isDisabled(window.location.pathname, "/login")}`} to="/login">
                Login
              </Link>
            </li>
          : <li>
              <span className="nav-link" onClick={handleLogout}> Logout </span>
            </li>}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);