import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'http://localhost:8081/auth/',
    realm: 'iwa',
    clientId: 'iwa-api'
}
const keycloak = new Keycloak(keycloakConfig)

export default keycloak



