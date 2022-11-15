import React, {useState, useEffect} from 'react'
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 
import {
    Activities,
    Home,
    Login,
    MyRoutines,
    Navbar,
    Register,
    Routines
} from './'

const App = () => {

  
    

  return (
    <div id="app">
        <Router>
          <Routes>
            <Route path="/" element ={<Navbar />}>
                  <Route path ="Home" element={<Home />} />
                  <Route path ="Login" element={<Login />} />
                  <Route path ="Register" element={<Register />} />
                  <Route path ="Activities" element={<Activities />} />
                  <Route path ="Routines" element={<Routines />} />
                  <Route path ="MyRoutines" element={<MyRoutines />} />
              </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
