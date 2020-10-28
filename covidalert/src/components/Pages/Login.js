import React from 'react';

class Login extends React.Component{
    render(){
        return (
            <div className="Login">
                <h2>Login</h2>
                <form>
                    <label>Mail</label>
                    <input placeholder="Entrez votre adresse mail"></input>
                    <label>Mot de passe</label>
                    <input placeholder="Entrez votre adresse mail"></input>
                    <button>Connexion</button>
                </form>
            </div>
        );
    }
}

export default Login;