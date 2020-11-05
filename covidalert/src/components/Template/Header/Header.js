import React from 'react';
import '../Template.scss';
import logo from '../../../assets/logos/logo2.png';
import App from '../../../App.js';
//import login from '../../../assets/icons/user-solid.png';

class Header extends React.Component{

    render() {
        return (
            <div className="Header">
                <div className="home-link">
                    <a><img className="logo" src={logo}></img>CovidAlert</a>
                </div>
            </div>
        )
    }
}

export default Header;