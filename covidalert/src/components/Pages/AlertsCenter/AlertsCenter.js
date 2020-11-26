import React from 'react';
import Alert from '../../Alert/Alert.js';
import '../AlertsCenter/AlertsCenter.scss';

import APIRequest from "../../../services/APIRequest";

class AlertsCenter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            notifications : []
        }
    }

    async componentDidMount() {
        const userId = localStorage.getItem("userId")
        await APIRequest.get("/api/v1/notifications/user/" + userId, (status, data) => {
            if (data !== null && data !== undefined) {
                console.log("get Notif User :"+data.toString());
                this.setState({notifications : data})
            }
        }, true);
    }

    render() {
        if (this.state.notifications.length === 0) {
            return(
                <div className="AlertsCenter">
                    <h2>Centre de notifications</h2>
                    <div>
                        <p> Aucune notification</p>
                    </div>
                </div>
            );
        }else {
            return (
                <div className="AlertsCenter">
                    <h2>Centre de notifications</h2>
                    <div>
                        { this.state.notifications.map(
                            notification => <Alert
                                date={notification.date_notification}
                                location={notification.location}
                                state={notification.state}
                            />
                        )}
                    </div>
                </div>
            );
        }
    }
}

export default AlertsCenter;