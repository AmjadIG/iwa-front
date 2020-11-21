import React from 'react'
//import { useKeycloak } from '@react-keycloak/web'
//import initKeycloak from "./services/initKeycloak";
import { Route,Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
    //initKeycloak.doLogin();
    //const {keycloak, initialized} = useKeycloak()
    let access = localStorage.getItem('access_token') !== null

    return (
        <Route
            {...rest}
            render={props => (
                access ? <Component {...props} /> : <Redirect to='/'/>
                )
            }

        />
    )
}
