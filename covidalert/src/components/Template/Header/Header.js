import React from 'react';
import '../Template.scss';
import logo from '../../../assets/logos/logo2.png';
import App from '../../../App.js';

class Header extends React.Component{


    signOut(){
        if (localStorage.currentUser != null){
            return <div className="login-link"><a>Se déconnecter</a></div>;
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="Header">
                <div className="home-link">
                    <a><img className="logo" src={logo}></img>CovidAlert</a>
                </div>
                {this.signOut()}
            </div>
        )
    }
}

export default Header;