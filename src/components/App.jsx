import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Activities,
  Home,
  Login,
  MyRoutines,
  Navbar,
  Register,
  Routines,
} from "./";
import { authUser } from "../api-adapter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      async function fetchUser() {
        const me = await authUser(localToken);
        setUser(me);
      }
      fetchUser();
    }
  }, []);

  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar user={user} />}>
            <Route path="Home" element={<Home />} />
            <Route path="Login" element={<Login setUser={setUser} />} />
            <Route path="Register" element={<Register />} />
            <Route path="Activities" element={<Activities />} />
            <Route path="Routines" element={<Routines />} />
            <Route path="MyRoutines" element={<MyRoutines />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
