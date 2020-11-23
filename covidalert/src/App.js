import './App.css';

import Login from './components/Pages/Login/Login'
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

import PrivateRoute from './PrivateRoute';

export default function App() {

  // an handler function that receives events launched by keycloak
  //const handleOnEvent = (event, error) => {
  //  console.log('onKeycloakEvent', event, error)
  //}

  return (

        <Router>
          <div className="App">
            <Header/>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signin">
                <Signin/>
              </Route>
              <PrivateRoute path='/home' component={Home} />
              <Route path="/">
                <Redirect to="/login"/>
              </Route>
            </Switch>
            <Footer/>
          </div>
        </Router>
  );
}
