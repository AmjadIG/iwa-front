import React from 'react';
import '../Login/Login.scss'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            mail:'mailTest',
            password:'',
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            mail: event.target.mail,
            password: event.target.password
        });
    }

    handleSubmit(){
        console.log(this.state.mail);
        console.log(this.state.password);

    }

    render(){
        return(
            <div className="Login margin-login">
                <form className="login-form">
                    <h2 className="login-title">Login</h2>
                    <div className="login-label">Mail</div>
                    <div>
                        <input className="login-input" placeholder="Entrez votre adresse mail" value={this.state.mail} onChange={this.handleChange}></input>
                    </div>
                    <div className="login-label">Mot de passe</div>
                    <div>
                        <input type="password" className="login-input" placeholder="Entrez votre mot de passe" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <button className="login-button" onChange={this.handleSubmit}>Connexion</button>
                    <div>
                        <a href="/signin" className="sign-in-link">Vous n'avez pas de compte? Inscrivez-vous</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;