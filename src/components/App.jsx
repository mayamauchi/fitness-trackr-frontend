import React, {Fragment} from 'react'
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

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route>
      
            </Route>
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;