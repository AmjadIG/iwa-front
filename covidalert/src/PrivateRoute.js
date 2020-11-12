import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { Route } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    const { keycloak } = useKeycloak()
    return (
        <Route
            {...rest}
            render={props => (
                keycloak?.authenticated ? <Component {...props} /> : keycloak.init({onLoad:'login-required'})
            )}
        />
    )
}

export default PrivateRoute