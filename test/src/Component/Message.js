import React, {Component} from 'react';

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcom Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }
    render() {
        return (
           
            <div>
                 <br /><hr />
                <h2> {this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>Submit</button>
            </div>
        );
    }
}

export default Message;