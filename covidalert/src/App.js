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

import { KeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'

import PrivateRoute from './PrivateRoute'


export default function App() {

  // an handler function that receives events launched by keycloak
  const handleOnEvent = (event, error) => {
    console.log('onKeycloakEvent', event, error)
  }

  return (
      <KeycloakProvider
          keycloak={keycloak}
          onEvent={(event, error) => handleOnEvent(event, error)}
      >
        <Router>
          <div className="App">
            <Header/>
            <Switch>
              <Route path="/signin">
                <Signin/>
              </Route>
              <PrivateRoute path='/' component={Home} />
              <Route path="/home">
                <Redirect to="/"/>
              </Route>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </KeycloakProvider>
  );
}
