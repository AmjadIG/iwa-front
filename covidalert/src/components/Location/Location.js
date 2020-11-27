import React from 'react';
import '../Location/Location.scss';

import axios from 'axios';
import APIRequest from "../../services/APIRequest";

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude : null,
            longitude : null,
            userState : null,
            loading : true
        }
        this.changeLocation = this.changeLocation.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    async componentDidMount() {
        await this.changeLocation();
        await this.loadData();
        this.setState({ loading : false})
    }

    async loadData() {
        const userId = await localStorage.getItem("userId")
        await APIRequest.get("api/v1/user_states/" + userId +"/currentState", (status, data) => {
            if(status === 200) {
                this.setState({ userState : data})
            }
        }, true)
    }


    async changeLocation(){

        await this.loadData();
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude :position.coords.longitude,
            })


            //add/{id_user}/longitude/{longitude}/latitude/{latitude}
            let url = "/api/v1/kafka/publish/longitude/" + this.state.longitude + "/latitude/" + this.state.latitude + "/userId/" + localStorage.getItem('userId') + "/state/" + this.state.userState;
            //let url = "/api/v1/user_localized/add/" + localStorage.getItem('userId') + "/longitude/"+ this.state.longitude +"/latitude/"+this.state.latitude;

            APIRequest.post(url,null, (status,data) =>{
                console.log(status);
            },true)

        });

    }

    locationComponent(){
        return(
            <div className="location-block">
                <h2>Localisation</h2>
                <hr/>
                <div className="location-body">
                    <p>Longitude: {this.state.longitude}</p>
                    <p>Latitude: {this.state.latitude}</p>
                    <button className="button-location" onClick={this.changeLocation}>Enregistrer Localisation</button>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.state.loading ? <h2>Veuillez acceptez la localisation</h2> : this.locationComponent()}
            </div>
        );
    }
}

export default Location;