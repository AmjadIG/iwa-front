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
            loading : true
        }
        this.changeLocation = this.changeLocation.bind(this)
    }

    async componentDidMount() {
        await this.changeLocation();
        this.setState({ loading : false})
    }

    changeLocation(){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude :position.coords.longitude,
            })

            //send location received by browser
            const newLocation = {
                longitude:this.state.longitude,
                latitude:this.state.latitude
            }

            let url = "/api/v1/user_localized/add/" + localStorage.getItem('userId');

            APIRequest.post(url,newLocation, (status,data) =>{
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