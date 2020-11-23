import React from 'react';
import '../History/History.scss';
import Alert from '../../Alert/Alert.js';


class History extends React.Component{

    constructor(props){
        super(props);
        this.historyList = this.props.userStates.concat(this.props.userLocations);
    }

    render(){
        
        return (
            <div className="History">
                <h2>Historique</h2>
                <div className="alert-block">
                    {this.historyList.map(historique => <Alert
                        date={historique.date_notification}
                        label={historique.label_notification}
                        longitude={historique.state.longitude}
                        latitude={historique.state.latitude}
                        />)}
                </div>
            </div>
        );
    }
}

export default History;