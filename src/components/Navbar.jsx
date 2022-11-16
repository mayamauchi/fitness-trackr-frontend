import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  const user = props.user;
  return (
    <div>
      <h2>Fitness Tracker</h2>
      <div id="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Activities">Activities</Link>
        <Link to="/Routines">Routines</Link>
        {user ? <Link to="/MyRoutines">My Routines</Link> : null}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
