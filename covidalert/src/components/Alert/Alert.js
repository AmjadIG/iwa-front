import React from 'react';
import '../Alert/Alert.scss'
import Moment from 'react-moment';
import axios from "axios";
import 'moment/locale/fr';

class Alert extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            city : null,
            locality : null
        }
    }

    async waitMyProps(){
        await this.props.location
    }

    async componentDidMount() {
        this.waitMyProps()
            .then( async res =>
                await axios({
                    method : 'get',
                    url : "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+this.props.location.latitude+"&longitude="+this.props.location.longitude+"&localityLanguage=fr"
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

    translateLabel(){
        if(this.props.state.label_state === "sane"){
            return "sain"
        }else if(this.props.state.label_state === "contact"){
            return "cas contact"
        }else{
            return "contaminé covid"
        }
    }

    Body(){
        if(this.props.location !== undefined) {
            return (
                <div className="Notification-body">
                    { this.state.city && this.state.locality ? <div> {this.state.city +"("+ this.state.locality +")"} </div> : null }
                    <div> {this.props.location.longitude},{this.props.location.latitude}</div>
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

export default Alert;