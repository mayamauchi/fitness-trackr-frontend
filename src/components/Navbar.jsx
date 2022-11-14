import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div id="navbar">
        <h2>Fitness Tracker</h2>
        <Link to="/Home">Home</Link>
        <Link to="/Login">Login</Link>
        {/* <Link to="/Register">Register</Link> */}
        <Link to="/Activities">Activities</Link>
        <Link to="/Routines">Routines</Link>
        <Link to="/MyRoutines">My Routines</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
