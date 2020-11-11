import React from 'react';
import Alert from '../../Alert/Alert.js';
import '../AlertsCenter/AlertsCenter.scss';

class AlertsCenter extends React.Component {
    render() {
        return(
            <div className="AlertsCenter">
                <h2>Centre de notifications</h2>
                <div>
                    <Alert></Alert>
                    <Alert></Alert>
                    <Alert></Alert>
                    <Alert></Alert>
                </div>
            </div>
        );
    }
}

export default AlertsCenter;