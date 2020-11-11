import React from 'react';
import AlertsCenter from '../AlertsCenter/AlertsCenter';
import Location from '../../Location/Location';

import '../Home/Home.scss'
import State from '../../State/State';
import History from '../History/History'

class Home extends React.Component {
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
                    <div className="AlertsCenter row"><AlertsCenter/></div>
                </div>
                <div className="column">
                    <div className="History row"><History/></div>
                </div>
            </div>
        );
    }
}

export default Home;