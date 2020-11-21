import Keycloak from "keycloak-js";

//const _kc = new Keycloak({
//    "realm": "covidalert",
//    "url": "http://localhost:8081/auth/",
//    "ssl-required": "external",
//    "resource": "covidalert-web",
//    "clientId" : "covidalert-web",
//    "public-client": true,
//    "confidential-port": 0
//})

const initKeycloak = (onAuthenticatedCallback) => {
    console.log("init keycloak")
    _kc.init({
        onLoad: 'login-required'
    }).then((authenticated) => {
        console.log("authenticated" + authenticated);
        if (authenticated) {
            onAuthenticatedCallback();
        } else {
            console.warn("not authenticated!");
            doLogin();
        }
    })
};

const doLogin = _kc.login;
const doLogout = _kc.logout;
const getToken = () => _kc.token;

export default {
    initKeycloak,
    doLogin,
    doLogout,
    getToken,
}