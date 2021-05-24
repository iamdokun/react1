import React, { Component } from 'react'

class userGreetings extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div> Welcome Abiodun</div>

        // return(
        //     this.state.isLoggedIn ? (
        //     <div> Welcome Abiodun</div>
        //      ) : (
        //     <div> Welcome Guest</div>
        // ))
        // let message;
        // if (this.state.isLoggedIn) {

        //     message = <div> Welcome Abiodun</div>
        // } else {
        //     message = <div> Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if (this.state.isLoggedIn) {
        //   return <div> Welcome Abiodun</div>;
        // } else {
        //   return <div> Welcome Guest</div>;
        // }
        // return (
        //     <div>
        //        <div> Welcome Abiodun</div>
        //        <div> Welcome Guest</div>
        //     </div>
        // )
    }
}

export default userGreetings
