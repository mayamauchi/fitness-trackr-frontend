import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api-adapter";

const Register = (props) => {
  async function handleRegister(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const token = await registerUser(username, password);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    
  }

  return (
    <div className="register-container">
      <h1 className="register-header">Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button className="register-button">Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
