import React from 'react';

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
            <div className="Location">
                <h2>Localisation : </h2>
                <p> long : {this.state.longitude}</p>
                <p> lat : {this.state.latitude}</p>
                <button onClick={this.changeLocation}> Localiser </button>
            </div>
        );
    }
}

export default Location;