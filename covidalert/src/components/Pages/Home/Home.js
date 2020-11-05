import React from 'react';
import AlertsCenter from '../AlertsCenter/AlertsCenter';
import Location from '../../Location/Location';

import '../Home/Home.scss'
import State from '../../State/State';

class Home extends React.Component {
    render(){
        return(
            <div className="Home">    
                <div className="State">
                    <State/>
                </div>
                <div className="Location">
                    <Location/>
                </div>
                <div className="AlertsCenter">
                    <AlertsCenter/>
                </div>
            </div>

        );
    }
}

export default Home;