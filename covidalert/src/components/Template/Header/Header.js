import React from 'react';
import '../Template.scss'

class Header extends React.Component{
    render() {
        return (
            <div className="Header">
                <h1>CovidAlert</h1>
                <a>Se Connecter</a>
            </div>
        )
    }
}

export default Header;