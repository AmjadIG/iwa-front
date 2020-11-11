import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'http://localhost:8081/',
    realm: 'awi',
    clientId: 'awi-api'
}
const keycloak = new Keycloak(keycloakConfig)
export default keycloak



