import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             username: '',
             comments: '',
             topic: 'react'
         }
     }
     handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
            
        })
     }
     handleCommentChange = (event) => {
         this.setState({
            comments: event.target.value
         })
     }
     handlerTopicChange = (event) => {
         this.setState({
            topic: event.target.value
         })
     }
     handleSubmit = (event) => {
        alert(`username: ${this.state.username} comment: ${this.state.comments} topic: ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Username:</label>
                <input type='text' value={username} onChange={this.handleUsernameChange} />
            </div>
            <div>
                <lable>Comments</lable>
                <textarea value={comments} onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
                <lable>Topic</lable>
                <select value={topic} onChange={this.handlerTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='veu'>Veu</option>
                </select>
            </div>
            <button>Submit</button>
            </form>
        )
    }
}

export default Form
