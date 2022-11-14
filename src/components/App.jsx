import React, {Fragment} from 'react'
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
  
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
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element ={<Navbar />}>
                <Route path ="Home" element={<Home />} />
                <Route path ="Login" element={<Login />} />
                {/* <Route path ="Register" element={<Register />} /> */}
                <Route path ="Activities" element={<Activities />} />
                <Route path ="Routines" element={<Routines />} />
                <Route path ="MyRoutines" element={<MyRoutines />} />
            </Route>
        )
    )
  return (
    <div id="app">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
