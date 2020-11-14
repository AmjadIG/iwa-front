import './App.css';

import Signin from './components/Pages/Login/Signin';
import Home from './components/Pages/Home/Home'

import Header from './components/Template/Header/Header.js'

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import Keycloak from 'keycloak-js'

import PrivateRoute from './PrivateRoute';

export default function App() {

  // an handler function that receives events launched by keycloak
  const handleOnEvent = (event, error) => {
    console.log('onKeycloakEvent', event, error)
  }

  return (
      <ReactKeycloakProvider
          authClient={keycloak}
          onEvent={(event, error) => handleOnEvent(event, error)}
      >
        <Router>
          <div className="App">
            <Switch>
              <PrivateRoute path='/home' component={Home} />
              <Route path="/test">
                <Redirect to="/test"/>
              </Route>
              <Route path="/">
                <Signin/>
              </Route>
            </Switch>
          </div>
        </Router>
      </ReactKeycloakProvider>
  );
}
