import React, { Component } from 'react'

class counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1,
            
        // },
        // () => {
        //     console.log('CallBack Value:', this.state.count)
        // })
        // console.log('outside:', this.state.count);

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    
    render() {
        return (
            <div>
               <div> count - {this.state.count}</div>
               <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default counter
