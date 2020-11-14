import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: `http://${process.env.KEYCLOAK_HOST}/auth/`,
    realm: 'iwa',
    clientId: 'iwa-api',
    onLoad: 'login-required'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;



