import React from 'react';
import '../Login/Login.scss'

class Signin extends React.Component{
    render(){
        return (
            <div className="Login margin-signin">
                <form className="login-form">
                    <h2 className="login-title">Sign In</h2>
                    <div className="login-label">Mail</div>
                    <div>
                        <input className="login-input" placeholder="Entrez votre adresse mail"></input>
                    </div>
                    <div className="login-label">Mot de passe</div>
                    <div>
                        <input type="password" className="login-input" placeholder="Entrez votre mot de passe"></input>
                    </div>
                    <div className="login-label">Entrez votre mot de passe une seconde fois</div>
                    <div>
                        <input type="password" className="login-input" placeholder="Entrez votre mot de passe"></input>
                    </div>
                    <button className="login-button">S'inscrire</button>
                    <div>
                        <a href="/login" className="sign-in-link">Vous avez déjà un compte? Connectez-vous</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;