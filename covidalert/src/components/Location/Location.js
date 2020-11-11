import React from 'react';
import '../Location/Location.scss';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude : null,
            longitude : null,
        }
        this.changeLocation = this.changeLocation.bind(this)
    }

    componentDidMount() {
        this.changeLocation()
    }

    changeLocation(){
        //TODO
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({latitude: position.coords.latitude, longitude :position.coords.longitude })
        });
    }

    render() {
        return(
            <div>
                <div className="location-block">
                    <h2>Localisation</h2>
                    <hr/>
                    <div className="location-body">
                        <p>Longitude: {this.state.longitude}</p>
                        <p>Latitude: {this.state.latitude}</p>
                        <button className="button-location" onClick={this.changeLocation}> Localiser </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;