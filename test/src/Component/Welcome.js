import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        const {name, aka} = this.props
        // const {state1 , state2} = this.state
        return (
           
            <div>
                <h2>Welcome {name} aka {aka}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Welcome;