import React from 'react';
import '../History/History.scss';
import Alert from '../../Alert/Alert.js';


class History extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="History">
                <h2>Historique</h2>
                <div className="alert-block">
                    {this.props.userStates.map(historique => <Alert
                        date={historique.date_state}
                        label={historique.label_state}
                        />)}
                    {
                        this.props.userLocations.map(loc => <Alert
                        date={loc.date}
                        longitude={loc.longitude}
                        latitude={loc.latitude}
                        />)
                    }
                </div>
            </div>
        );
    }
}

export default History;