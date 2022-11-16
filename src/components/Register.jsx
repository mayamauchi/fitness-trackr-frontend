import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api-adapter";
import {toast, ToastContainer} from 'react-toastify'; 


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    console.log(username, password);
    const { token } = await registerUser(username, password);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    setUsername("") //setting to empty string clears the field
    setPassword("")
    
    if (token) {
      toast.success("Register Successful")
      navigate("/Home");

    } else {
      toast.error("Register Failed")
      navigate("/Register")
    }

    

    
  }

  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="username *" required value={username}
          onChange={function (event) {
            setUsername(event.target.value)

          }}/>
        <input
          type="password"
          name="password"
          placeholder="password *"
          required
          value={password}
          onChange={function (event) {
            setPassword(event.target.value)

          }}
        />
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
      <p>*password must be 8 characters or more</p>
      <br />
      <p>Already a User?</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
