import React from 'react';
import '../State/State.scss';

class State extends React.Component {
    constructor(props){
        super(props);
        //possibilité "sane" / "contact" / "covid"
        this.state = {
            sane : true,
            contact : false,
            health: "Vous êtes en bonne santé!"
        }
        this.changeHealthState = this.changeHealthState.bind(this);
        this.changeCondition = this.changeCondition.bind(this);
    }

    changeCondition(){
        if(this.state.sane && this.state.contact){
            this.setState({health:"Vous êtes cas contact"});
        }else if(this.state.sane){
            this.setState({health:"Vous êtes en bonne santé!"});
        }
        this.setState({
            contact : !this.state.contact
        })
    }

    changeHealthState(){
        if(!this.state.sane){
            this.setState({health:"Vous avez le covid"});
        }else if(this.state.sane && this.state.contact){
            this.setState({health:"Vous êtes cas contact"});
        }else if(this.state.sane){
            this.setState({health:"Vous êtes en bonne santé!"});
        }
        this.setState({
            sane : !this.state.sane
        })
    }

    render(){
        let button1 = this.state.sane ? <button className="button covid" onClick={this.changeHealthState}>J'ai le covid</button> : <button className="button sane" onClick={this.changeHealthState}>Je n'ai plus le covid</button>
        let button2 = this.state.contact ? <button className="button sane" onClick={this.changeCondition}>Je ne suis plus cas contact</button> : <button className="button contact" onClick={this.changeCondition}>Je suis cas contact</button>
        return(
            <div className="state-component">
                <h2>Votre état de Santé</h2>
                <div className="state">
                    {this.state.health}
                </div>
                <div className="state">
                    <p>Changer mon état</p>
                    {button1}
                    {button2}
                </div>
            </div>
        )
    }
}

export default State;