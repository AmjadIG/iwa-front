import React from 'react';
import '../Alert/Alert.scss'

class Alert extends React.Component{
    
    render(){
        return (
            <div className="Notification">
                <div className="Notification-head">Titre - Le {this.props.date}<a href="/">x</a></div>
                <hr/>
                <div className="Notification-body">
                    <div> {this.props.label} </div>
                    <div> {this.props.state.longitude} </div>
                    <div> {this.props.state.latitude} </div>
                </div>
            </div>
        );
    }
}

export default Alert;