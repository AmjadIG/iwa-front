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

    // submit form
    async formSubmit(event){
        if(this.state.mail === "" || this.state.password === ""){
            alert('Veuillez saisir tous les champs');
        }else{
            var data = {
                "mail": this.state.mail,
                "password": this.state.password,
            };
            console.log(data);
            //await APIRequest.post("/authenticate",data,this.handleResponseAuthenticate,false);
        }
    }

    render(){
        //if(this.state.redirect){
        //    return <Redirect to'/home' />;
        //}
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