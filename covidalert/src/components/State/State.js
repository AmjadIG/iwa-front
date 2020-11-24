import React from 'react';
import '../State/State.scss';
import axios from 'axios';
import APIRequest from "../../services/APIRequest";

class State extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sane : "sane",
            health: "Vous êtes en bonne santé!",
            user : {
                "id_user":null,
                "mail": null,
                "states":null,
                "locations":null
            }
        }
        this.beSane = this.beSane.bind(this);
        this.beSick = this.beSick.bind(this);
        this.beContact = this.beContact.bind(this);
        this.loadData = this.loadData.bind(this);
        this.sendState = this.sendState.bind(this);
        this.updateState = this.updateState.bind(this)
    }

    async componentDidMount() {
        console.log("mount..)")
        await this.loadData();
    }

    async loadData() {
        const userId = await localStorage.getItem("userId")
        await APIRequest.get("api/v1/users/" + userId, (status, data) => {
            if(status === 200) {
                this.setState({user: data});
            }
        }, true)
        await APIRequest.get("api/v1/user_states/" + userId +"/currentState", (status, data) => {
            if(status === 200) {
                this.updateState(data)
            }
        }, true)
    }

    async beSane() {
        this.setState({sane: "sane"});
        this.setState({health: "Vous êtes en bonne santé!"});
        await this.sendState("sane");
    }

    async beContact() {
        this.setState({sane : "contact"});
        this.setState({health: "Vous êtes cas contact"});
        await this.sendState("contact");
    }

    async beSick(){
        this.setState({sane : "covid"});
        this.setState({health : "Vous avez le covid"});
        await this.sendState("covid");
    }

    async updateState(newState){
        if(newState === "covid"){
            this.setState({sane : "covid"});
            this.setState({health : "Vous avez le covid"});
        }
        else if(newState === "contact"){
            this.setState({sane : "contact"});
            this.setState({health: "Vous êtes cas contact"});
        }else if(newState === "sane"){
            this.setState({sane: "sane"});
            this.setState({health: "Vous êtes en bonne santé!"});
        }
    }


    async sendState(state){
        console.log("post "+state)
        await APIRequest.post('api/v1/user_states/' + this.state.user.id_user +'/'+ state, null, (status, data) => {
            if (status == 200) {
                console.log(status);
                this.setState({sane: "sane"});
                this.setState({health: "Vous êtes en bonne santé!"});
                return status;
            }
        }, true)
    }

    render(){
        let button1 = this.state.sane === "sane" ? <div><button className="button covid" onClick={this.beSick}>J'ai le covid</button> <button className="button sane" onClick={this.beContact}>Je suis cas contact</button></div>  : null
        let button2 = this.state.sane === "contact" ? <button className="button sane" onClick={this.beSane}>Je ne suis plus cas contact</button> : null
        let button3 = this.state.sane === "covid" ? <button className="button sane" onClick={this.beSane}>Je n'ai plus le covid</button> : null
        return(
            <div className="state">
                <h2>Votre état de Santé</h2>
                <p> user : </p>
                <p> id : {this.state.user.id_user}</p>
                <p> {this.state.user.toString()}</p>
                <hr/>
                <div>
                    {this.state.health}
                </div>
                <div>
                    <p>Changer mon état</p>
                    {button1}
                    {button2}
                    {button3}
                </div>
            </div>
        )
    }
}

export default State;