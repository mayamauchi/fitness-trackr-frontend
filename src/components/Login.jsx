import React from 'react'
import { Link } from "react-router-dom";
import { loginUser } from "../api-adapter";

const Login = () => {
    async function handleLogin(event) {
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        console.log(username, password)
        const token = await loginUser(username, password);
        localStorage.removeItem("token");
        localStorage.setItem("token", token);
        
      }
      return (
        <div className="login-container">
          <h1 className="login-header">Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="username *" required />
            <input type="password" name="password" placeholder="password *" required/>
            <button className="login-button" type="submit">Submit</button>
          </form>
          <Link to="/register">Register</Link>
        </div>
      );

}

export default Login;