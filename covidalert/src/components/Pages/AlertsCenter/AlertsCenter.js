import React from 'react';
import Alert from '../../Alert/Alert.js';
import '../AlertsCenter/AlertsCenter.scss';

import axios from 'axios';

class AlertsCenter extends React.Component {
    state = {
        userNotifications: []
    }

    componentDidMount(){
        axios.get(`http://${process.env.REACT_APP_API_HOST}/api/v1/notifications`)
            .then(res => {
                const notifications = res.data;
                const userNotifications = notifications.filter(notifications => notifications.id_user == localStorage.currentUser.id_user);
                this.setState({ userNotifications });
            })
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