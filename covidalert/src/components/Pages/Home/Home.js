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


    async componentDidMount() {
        //User States Request
        const userId = localStorage.getItem("userId")
        await APIRequest.get("/api/v1/user_states/" + userId, (status, data) => {
            if (data !== null && data !== undefined) {
                const states = data;
                const userStates = states.filter(states => states.id_user === userId);
                this.setState({userStates})
            }
        }, true);
    }

    render(){
        return(
            <div className="Home">
                <div className="StateLocation column1">
                    <div className="State row">
                        <State/>
                    </div>
                    <div className="Location row">
                        <Location/>
                    </div>
                </div>
                <div className="column2">
                    <div className="AlertsCenter row"><AlertsCenter userNotifications={this.state.userNotifications}/></div>
                </div>
                <div className="column3">
                    <div className="History row"><History userStates={this.state.userStates} userLocations={this.state.userLocations}/></div>
                </div>
            </div>
        );
    }
}

export default Home;