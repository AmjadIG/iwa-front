import React from 'react';
import '../Alert/Alert.scss'

class Alert extends React.Component{

    constructor(props){
        super(props)
    }

    Body(){
        if(this.props.label === undefined){
            return (
                <div className="Notification-body">
                    <div> {this.props.longitude} </div>
                    <div> {this.props.latitude} </div>
                </div>
            );
        } else {
            return (
                <div className="Notification-body">
                    <div> {this.props.label} </div>
                </div>
            );
        }
    }
    
    render(){
        let body = this.Body()
        return (
            <div className="Notification">
                <div className="Notification-head">Titre - Le {this.props.date}<a href="/">x</a></div>
                <hr/>
                {body}
            </div>
        );
    }
}

export default Alert;