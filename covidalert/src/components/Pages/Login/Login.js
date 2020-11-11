import React from 'react';
import '../Login/Login.scss'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            mail:'',
            password:'',
            redirect: false
        }
    }

    render(){

    }

    form(){
        return(
            <div className="Login margin-login">
                <form className="login-form">
                    <h2 className="login-title">Login</h2>
                    <div className="login-label">Mail</div>
                    <div>
                        <input className="login-input" placeholder="Entrez votre adresse mail"></input>
                    </div>
                    <div className="login-label">Mot de passe</div>
                    <div>
                        <input type="password" className="login-input" placeholder="Entrez votre mot de passe"></input>
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