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
                
                <div className="flexbox vertical-center">
                <div className="history-head">Historique des états</div>
                    {this.props.userStates.map(historique =>
                        <Alert
                        date={historique.date}
                        label={historique.label_state}
                        />
                        )}
                </div>
                
                <div>
                <div className="history-head">Historique des localisations</div>
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