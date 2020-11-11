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
        this.beSane = this.beSane.bind(this);
        this.beSick = this.beSick.bind(this);
        this.beContact = this.beContact.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData()
    }

    // todo load data from db
    loadData(){
       console.log("load data")
    }

    beSane(){
        this.setState({sane : true});
        this.setState({contact : false});
        this.setState({health : "Vous êtes en bonne santé!"});
    }

    beContact() {
        this.setState({sane : true});
        this.setState({contact : true});
        this.setState({health: "Vous êtes cas contact"});
    }


    beSick(){
        this.setState({sane : false});
        this.setState({health : "Vous avez le covid"});
    }
    render(){
        let button1 = this.state.sane ? <button className="button covid" onClick={this.beSick}>J'ai le covid</button> : <button className="button sane" onClick={this.beSane}>Je n'ai plus le covid</button>
        let button2 = this.state.contact ? <button className="button sane" onClick={this.beSane}>Je ne suis plus cas contact</button> : <button className="button contact" onClick={this.beContact}>Je suis cas contact</button>
        return(
            <div className="state">
                <h2>Votre état de Santé</h2>
                <hr/>
                <div>
                    {this.state.health}
                </div>
                <div>
                    <p>Changer mon état</p>
                    {button1}
                    {button2}
                </div>
            </div>
        )
    }
}

export default State;