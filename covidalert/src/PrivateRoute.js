import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { Route } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    const { keycloak } = useKeycloak()
    //var loginPage = keycloak.login()

    return (
        <Route
            {...rest}
            render={props => (
                //keycloak?.authenticated ? <Component {...props} /> : loginPage)
                <Component {...props} />
            )}
        />
    )
}

export default PrivateRoute;