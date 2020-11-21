import React from 'react';
import Alert from '../../Alert/Alert.js';
import '../AlertsCenter/AlertsCenter.scss';

import axios from 'axios';
import APIRequest from "../../../services/APIRequest";

class AlertsCenter extends React.Component {
    state = {
        userNotifications: []
    }

    componentDidMount(){
        APIRequest.get("/api/v1/notifications",(status,data) =>{
            const notifications = data;
            const userNotifications = notifications.filter(notifications => notifications.id_user == localStorage.currentUser.id_user);
            this.setState({ userNotifications });
        },true);
    }

    render() {
        return(
            <div className="AlertsCenter">
                <h2>Centre de notifications</h2>
                <div>
                    { this.state.userNotifications.map(notification => <Alert date={notification.date_notification} label={notification.label_notification} />)}
                </div>
            </div>
        );
    }
}

export default AlertsCenter;