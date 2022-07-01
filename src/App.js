import './App.css';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import React from "react";
import Signup from './signup';
import Home from './login';
import Booking from './booking';
import Checkout from './checkout';

// import {
// BrowserRouter as Router,

//   Switch,
//   Route,
  
// } from "react-router-dom";

export default function App() {
  return (
    
    
      
      /* { <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> } } */

        /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
            
        <Router>
          <Switch>
          <Route exact path="/"><Booking/></Route>
        <Route exact path="/login" ><Home/></Route>
        <Route exact path="/signup"><Signup/></Route> 
        <Route exact path="/checkout"><Checkout/></Route>
        </Switch>
        </Router>
      
    
   
  );
}
