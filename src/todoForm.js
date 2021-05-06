import React, { Component } from 'react'
import './todoForm.css'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state={usrInput :""}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({usrInput:e.target.value})
    }

    handleSubmit() {
            this.props.addTodo(this.state.usrInput)
            this.setState({usrInput:""})
    }
    render(){
        return(
            <div>
                <input type="text"
                className="todoInput"
                placeholder="enter todo here"
                 value={this.state.usrInput}
                 onChange={this.handleChange}
                 ></input>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default TodoForm;