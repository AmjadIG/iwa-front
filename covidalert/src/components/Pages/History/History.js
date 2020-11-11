import React from 'react';
import '../History/History.scss';
import Alert from '../../Alert/Alert.js';


class History extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="History">
                <h2>Historique</h2>
                <div className="alert-block">
                    <Alert></Alert>
                    <Alert></Alert>
                    <Alert></Alert>
                    <Alert></Alert>
                </div>
            </div>
        );
    }
}

export default History;