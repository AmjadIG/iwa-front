import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Template.scss';
import logo from '../../../assets/logos/logo2.png';
import App from '../../../App.js';


function Header(){
    const history = useHistory();

    const signOut = () =>{ 
        localStorage.currentUser = null;
        let path = "/login"; 
        history.push(path);
    }

    const SignOutButton = () =>{
        if(localStorage.currentUser != null){
            return <div className="login-link"><a onClick={signOut}>Se déconnecter</a></div>
        }else{
            return null
        }
    }

    return (
        <div className="Header">
            <div className="home-link">
                <a><img className="logo" src={logo}></img>CovidAlert</a>
            </div>
            <SignOutButton/>
        </div>
        );
}

export default Header;