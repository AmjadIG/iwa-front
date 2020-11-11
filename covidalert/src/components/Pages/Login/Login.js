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

<<<<<<< HEAD
    handleChange(event){
        this.setState({
            mail: event.target.mail,
            password: event.target.password
        });
    }

    handleSubmit(){
        console.log(this.state.mail);
        console.log(this.state.password);
=======
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
            await APIRequest.post("/authenticate",data,this.handleResponseAuthenticate,false);
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
>>>>>>> 6c8f22549440eca25275c4ad19428080e8a70d62

    handlePasswordChange(event){
        this.setState({password: event.target.value})
    }

    render(){
        return(
            <div className="Login margin-login">
                <form className="login-form" onSubmit={this.formSubmit}>
                    <h2 className="login-title">Login</h2>
                    <div className="login-label">Mail</div>
                    <div>
<<<<<<< HEAD
                        <input className="login-input" placeholder="Entrez votre adresse mail" value={this.state.mail} onChange={this.handleChange}></input>
                    </div>
                    <div className="login-label">Mot de passe</div>
                    <div>
                        <input type="password" className="login-input" placeholder="Entrez votre mot de passe" value={this.state.password} onChange={this.handleChange}></input>
=======
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
>>>>>>> 6c8f22549440eca25275c4ad19428080e8a70d62
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