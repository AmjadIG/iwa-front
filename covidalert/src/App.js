import './App.css';

import Login from './components/Pages/Login/Login';
import Signin from './components/Pages/Login/Signin';
import Home from './components/Pages/Home/Home'

import Header from './components/Template/Header/Header.js'
import Footer from './components/Template/Footer/Footer.js'

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
