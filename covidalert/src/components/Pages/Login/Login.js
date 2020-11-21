import React from 'react';
import APIRequest from '../../../services/APIRequest';
import { Redirect} from "react-router";
import '../Login/Login.scss';
import axios from 'axios';
var qs = require('qs');

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleResponseAuthenticate = this.handleResponseAuthenticate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.state={
            mail:'',
            password:'',
            redirect: false
        }
    }

    // submit form
    // authenticate is delegate to keycloak. We just verify through API if the user exists
    async formSubmit(event){
        event.preventDefault();
        if(this.state.mail === "" || this.state.password === ""){
            alert('Veuillez saisir tous les champs');
        }else{
            var data = {
                "mail": this.state.mail,
                "password": this.state.password,
            };
            let url = "/api/v1/users/mail/" + this.state.mail;
            console.log(data);
            //this.handleResponseAuthenticate(200,"200")
            await APIRequest.get(url,this.handleResponseAuthenticate,false);
        }
    }

    // handle response where we do a request to keycloak to get a token.
    handleResponseAuthenticate(status,data){
        if(status === 200){
            // get token from keycloak api;
            let requestBody = qs.stringify({
                "username": this.state.mail,
                "password": this.state.password,
                "client_id" : "covidalert-web",
                "grant_type" : "password",
            });
            let url = process.env.REACT_APP_KEYCLOAK_HOST + '/auth/realms/covidalert/protocol/openid-connect/token';

            axios({
                method: 'post',
                url: url,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : requestBody,
            }).then(res => {
                    // authenticate sucessful
                    // to do: get id of user
                    if(res.status === 200){
                        console.log(res.status);
                        localStorage.setItem('access_token',res.data.access_token);
                        this.setState({redirect : true})
                        console.log("authentification sucessful")
                    }
                })
                .catch(err => {
                    alert("mot de passe incorrect");
                    console.log(err);
                })

        }else{
            alert("mail incorrect")
        }
    }

    render(){
        if(this.state.redirect){
            return <Redirect to='/home' />;
        }
        return (this.form());
    }

    handleMailChange(event){
        this.setState({mail: event.target.value})
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value})
    }

    form(){
        return(
            <div className="Login margin-login">
                <form className="login-form" onSubmit={this.formSubmit}>
                    <h2 className="login-title">Login</h2>
                    <div className="login-label">Mail</div>
                    <div>
                        <input
                            className="login-input"
                            placeholder="Entrez votre adresse mail"
                            onChange={this.handleMailChange}
                            value={this.state.mail}
                        >
                        </input>
                    </div>
                    <div className="login-label">Mot de passe</div>
                    <div>
                        <input
                            type="password"
                            className="login-input"
                            placeholder="Entrez votre mot de passe"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                        >
                        </input>
                    </div>
                    <button className="login-button">Connexion</button>
                    <div>
                        <a href="/signin" className="sign-in-link">Vous n'avez pas de compte? Inscrivez-vous</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;