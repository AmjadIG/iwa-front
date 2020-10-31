import React from 'react';
import '../Template.scss';

class Header extends React.Component{
    render() {
        return (
            <div className="Header">
                <img src='../../../../assets/logos/logo2.png'></img>
                <div>CovidAlert</div>
                <a class="login-image">Se Connecter</a>
            </div>
        )
    }
}

export default Header;