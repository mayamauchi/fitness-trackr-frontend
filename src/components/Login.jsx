import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api-adapter";
import { toast } from "react-toastify";

const Login = ({ setUser, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleLogin(event) {
    event.preventDefault();
    const { token, user } = await loginUser(username, password);

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    localStorage.removeItem("username");
    localStorage.setItem("username", username);
    setUsername("");
    setPassword("");
    setUser(user);
    setIsLoggedIn(true);
    
    if (token) {
      toast.success("Login Successful");
      navigate("/Home");
    } else {
      toast.error("Login Failed");
      navigate("/Login");

    }
    
  }
  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="username *"
          required
          value={username}
          onChange={function (event) {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password *"
          required
          onChange={function (event) {
            setPassword(event.target.value);
          }}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <br />
      <h3>Not Yet a User?</h3>
      <Link to="/register" className="link">
        Register
      </Link>
    </div>
  );
};

export default Login;
