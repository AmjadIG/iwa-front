import React from 'react';
import '../Login/Login.scss'
import {Redirect} from "react-router";
import APIRequest from "../../../services/APIRequest";
import axios from 'axios';
var qs = require('qs');


class Signin extends React.Component{

    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.createUserAccount = this.createUserAccount.bind(this);
        this.getAdminToken = this.getAdminToken.bind(this);
        this.form = this.form.bind(this);
        this.state={
            mail:'',
            password:'',
            verifiedpassword: '',
            redirect: false
        }
    }

    // submit for create user in db
    async formSubmit(event){
        event.preventDefault();
        if(this.state.mail === "" || this.state.password === "" || this.state.verifiedpassword === ""){
            alert('Veuillez remplir tous les champs')
        }
        else if(this.state.password !== this.state.verifiedpassword){
            alert('Les deux mots de passe sont différents')
        }else{
            let data = {
                "mail" : this.state.mail,
                "password": ""
            }
            await APIRequest.post("/api/v1/users",data,this.getAdminToken,false)
        }

    }

    // acquire admin acces token
    getAdminToken(status,data){
        if(status === 201){
            // create user in keycloak database
            let requestBody = qs.stringify({
                "username": process.env.REACT_APP_KEYCLOAK_ADMIN_USERNAME,
                "password": process.env.REACT_APP_KEYCLOAK_ADMIN_PASSWORD,
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
                data : requestBody
            }).then(res => {
                if(res.status === 200){
                    console.log(res.status);
                    console.log("admin token acquired");
                    this.createUserAccount(res.data.access_token);
                }else{
                    console.log("error in admin token demand");
                }
            })
                .catch(err =>{
                    alert("keycloak error");
                    console.log("keycloak error")
                })
        }else{
            alert("intern server error");
            console.log("intern server error")
        }
    }

    //create user in keycloak db
    createUserAccount(token){
        let requestBody = {
            "email": this.state.mail,
            "enabled":"true",
            "username": this.state.mail,
            "credentials": [
                {
                    "type": "password",
                    "value": this.state.password,
                    "temporary": false
                }
            ]
        }
        let url = process.env.REACT_APP_KEYCLOAK_HOST + '/auth/admin/realms/covidalert/users';

        axios({
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data : requestBody
        }).then(res => {
            // to do catch res.status
            console.log(res.status);
                alert("user created");
                this.setState({redirect : true});
                console.log("user created");
        })
            .catch(err =>{
                alert("error in creation user with keycloak");
                console.log(err);
            })
    }


    form(){
        return (
            <div className="Login margin-signin">
                <form className="login-form" onSubmit={this.formSubmit}>
                    <h2 className="login-title">Sign In</h2>
                    <div className="login-label">Mail</div>
                    <div>
                        <input className="login-input" value={this.state.mail} onChange={text => this.setState({ mail: text.target.value })} placeholder="Entrez votre adresse mail"></input>
                    </div>
                    <div className="login-label">Mot de passe</div>
                    <div>
                        <input type="password" className="login-input" value={this.state.password} onChange={text => this.setState({ password: text.target.value })} placeholder="Entrez votre mot de passe"></input>
                    </div>
                    <div className="login-label">Entrez votre mot de passe une seconde fois</div>
                    <div>
                        <input type="password" className="login-input" value={this.state.verifiedpassword} onChange={text => this.setState({ verifiedpassword: text.target.value })} placeholder="Entrez votre mot de passe"></input>
                    </div>
                    <button className="login-button">S'inscrire</button>
                    <div>
                        <a href="/login" className="sign-in-link">Vous avez déjà un compte? Connectez-vous</a>
                    </div>
                </form>
            </div>
        );
    }

    render(){
        if(this.state.redirect){
            return <Redirect to='/login' />;
        }
        return (this.form());
    }
}

export default Signin;