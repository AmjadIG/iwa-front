import React from 'react';
import Alert from '../../Alert/Alert.js';
import '../AlertsCenter/AlertsCenter.scss';

import axios from 'axios';
import APIRequest from "../../../services/APIRequest";

class AlertsCenter extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="AlertsCenter">
                <h2>Centre de notifications</h2>
                <div>
                    { this.props.userNotifications.map(
                        notification => <Alert
                        date={notification.date_notification}
                        label={notification.label_notification} />
                    )}
                </div>
            </div>
        );
    }
}

export default AlertsCenter;