import React from 'react';
import AlertsCenter from '../AlertsCenter/AlertsCenter';
import Location from '../../Location/Location';

import '../Home/Home.scss'
import State from '../../State/State';
import History from '../History/History'
import APIRequest from '../../../services/APIRequest';

class Home extends React.Component {

    state = {
        userNotifications: [],
        userStates: [],
        userLocations: []
    }

    constructor(props){
        super(props)

        this.state.userNotifications.push(
            {
            date_notification : Date.now,
            label_notification : "covid"
        })
        this.state.userStates.push({
            date_state : Date.now,
            state : {label_state : "sane"}
        })
        this.state.userLocations.push({
            date : Date.now,
            longitude : 3,
            latitude : 40
        })
    }
    /*
    componentDidMount(){
        //User States Request
        APIRequest.get("/api/v1/user_states",(status, data) =>{
            const states = data;
            const userStates = states.filter(states => states.id_user == localStorage.currentUser.id_user);
            this.setState({ userStates })
        },true);

        //User Notifications Request
        APIRequest.get("/api/v1/notifications",(status,data) =>{
            const notifications = data;
            const userNotifications = notifications.filter(notifications => notifications.id_user == localStorage.currentUser.id_user);
            this.setState({ userNotifications });
        },true);

        APIRequest.get("/api/v1/user_localized",(status,data) =>{
            const locations = data;
            const userLocations = locations.filter(location => location.id_user == localStorage.currentUser.id_user);
            this.setState({ userLocations });
        },true);
    }*/

    render(){
        return(
            <div className="Home">
                <div className="StateLocation column">
                    <div className="State row">
                        <State/>
                    </div>
                    <div className="Location row">
                        <Location/>
                    </div>
                </div>
                <div className="column">
                    <div className="AlertsCenter row"><AlertsCenter userNotifications={this.state.userNotifications}/></div>
                </div>
                <div className="column">
                    <div className="History row"><History userStates={this.state.userStates} userLocations={this.state.userLocations}/></div>
                </div>
            </div>
        );
    }
}

export default Home;