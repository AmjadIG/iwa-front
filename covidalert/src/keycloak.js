import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'http://localhost:8081/auth/',
    realm: 'iwa',
    clientId: 'iwa-api',
    onLoad: 'login-required'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;



