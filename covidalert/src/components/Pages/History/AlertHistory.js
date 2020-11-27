import React from 'react';
import '../History/History.scss'
import Moment from 'react-moment';
import axios from "axios";
import 'moment/locale/fr';

class AlertHistory extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            city : null,
            locality : null
        }
    }

    async waitForLocations(){
        await this.props.location
    }

    async componentDidMount() {
        if(this.props.type === "locations"){
            this.waitForLocations()
                .then( async res =>
                    await axios({
                        method : 'get',
                        url : "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+this.props.latitude+"&longitude="+this.props.longitude+"&localityLanguage=fr"
                    })
                        .then( response => {
                            if(response.status !== 200){
                                console.log(response.status);
                                alert(response.status);
                                return response.status;
                            }
                            console.log(response.status);
                            this.setState({city : response.data.city , locality : response.data.locality});
                            return response.status;
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                )
        }
        console.log(this.state)
    }

    translateLabel(){
        if(this.props.label === "sane"){
            return "Vous aviez croisé un ou plusieurs individus sains."
        }else if(this.props.label === "contact"){
            return "Vous aviez croisé un cas contact."
        }else{
            return "Attention, vous aviez sûrement croisé un contaminé Covid."
        }
    }

    Body(){
        if(this.props.type !== "states") {
            return (
                <div className="Notification-body">
                    { this.state.city && this.state.locality ? <div> {this.state.city +" - "+ this.state.locality} </div> : null }
                    <div className="details"> Longitude: {this.props.longitude}, Latitude: {this.props.latitude}</div>
                </div>
            );
        }else {
            return (
                <div className="Notification-body">
                    <div> {this.translateLabel()} </div>
                </div>
            );
        }
    }
    
    render(){
        let body = this.Body()
        var moment = require('moment')
        return (
            <div className="Notification">
                <div className="Notification-head"> {moment(this.props.date).locale('fr').fromNow()}</div>
                <hr/>
                {body}
            </div>
        );
    }
}

export default AlertHistory;