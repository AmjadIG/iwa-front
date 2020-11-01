import React from 'react';
import '../Alert/Alert.scss'

class Alert extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return (
            <div className="Notification">
                <div className="Notification-head">Titre - Le {this.props.date_notification}</div>
                <button>x</button>
                <hr/>
                <div className="Notification-body">contenu de la notification {this.props.label_notification}</div>
            </div>
        );
    }
}

export default Alert;