import './App.css';

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

import { ReactKeycloakProvider } from '@react-keycloak/web';
//import keycloak from './keycloak';
import Keycloak from 'keycloak-js'

import PrivateRoute from './PrivateRoute';

export default function App() {

  const keycloak = new Keycloak({
    url: `http://${process.env.KEYCLOAK_HOST}/auth`,
    realm: 'iwa',
    clientId: 'iwa-api'
  })

  // an handler function that receives events launched by keycloak
  const handleOnEvent = (event, error) => {
    console.log('onKeycloakEvent', event, error)
  }

  return (
      <ReactKeycloakProvider
          authClient={keycloak}
          onEvent={(event, error) => handleOnEvent(event, error)}
      >
        <Header/>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/signin">
                <Signin/>
              </Route>
              <PrivateRoute path='/' component={Home} />
              <Route path="/home">
                <Redirect to="/"/>
              </Route>
            </Switch>
          </div>
        </Router>
      </ReactKeycloakProvider>

  );
}
