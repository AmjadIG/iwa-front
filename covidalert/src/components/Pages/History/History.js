import React from 'react';
import '../History/History.scss';
import AlertHistory from '../History/AlertHistory'
import APIRequest from "../../../services/APIRequest";

class History extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            states : [],
            locations : []
        }
    }

    async componentDidMount() {
        const userId = localStorage.getItem("userId")
        const statesURL = "/api/v1/user_states/"+userId
        const locationsURL = "/api/v1/user_localized/"

        await APIRequest.get(statesURL, (status, dataS) => {
            if (dataS !== null && dataS !== undefined) {
                console.log("get States User :"+dataS.toString());
                this.setState({states : dataS})
            }
        }, true);

        await APIRequest.get(locationsURL, (status, dataL) => {
            if (dataL !== null && dataL !== undefined) {
                console.log("get Locations User :"+dataL.toString());
                this.setState({locations : dataL})
            }
        }, true);
    }

    render(){
        
        return (
            <div className="History">
                <h2>Historique</h2>

                <div className="history-head">Historique des états</div>
                    {this.state.states.map((historique, indexHistorique) =>
                        <AlertHistory className="dimensions"
                        key={indexHistorique}
                        type="states"
                        date={historique.date}
                        label={historique.state.label_state}
                        />
                        )}
                <div className="history-head">Historique des localisations</div>
                    {this.state.locations.map((loc, indexLoc) =>
                        <AlertHistory
                        key={indexLoc}
                        type="locations"
                        date={loc.date}
                        longitude={loc.location.longitude}
                        latitude={loc.location.latitude}
                        />
                        )}
            </div>
        );
    }
}

export default History;