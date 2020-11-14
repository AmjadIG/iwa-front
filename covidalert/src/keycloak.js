import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: `http://${process.env.REACT_APP_KEYCLOAK_HOST}/auth/`,
    realm: 'iwa',
    clientId: 'iwa-api',
    onLoad: 'login-required'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;



