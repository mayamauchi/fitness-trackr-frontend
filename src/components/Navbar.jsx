import React from "react";
import { Outlet, Link } from "react-router-dom";
import {LoggedIn, Logout} from "./";

const Navbar = (props) => {
  const user = props.user;
  const handleLogout = props.handleLogout
  const isLoggedIn = props.isLoggedIn
  const setIsLoggedIn = props.setIsLoggedIn
  return (
    <div>
      <div>
      <h2>Fitness Tracker</h2>
      <LoggedIn user={user}/>
      {setIsLoggedIn == true ? (<Logout handleLogout={handleLogout} setIsLoggedIn={setIsLoggedIn}/>) : 
      null}
      
      </div>
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
