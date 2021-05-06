import React, { Component } from 'react';
import TodoForm from './todoForm'
import './todoList.css'
import * as apiCalls from './api'


class TodoList extends Component {
   constructor(props){
       super(props)

       this.state = {
           todos:[]
       }
       this.addTodo = this.addTodo.bind(this)
   }

componentDidMount(){
    this.loadTodo()
}

 async loadTodo() {
     let todos = await apiCalls.getTodos();
    this.setState({todos})
}

   async addTodo(value){
        let newTodo = await apiCalls.createTodo(value)
         this.setState({todos:[...this.state.todos, newTodo]})
    }

   async deleteTodo(id){
            await apiCalls.removeTodo(id)
            const todos = this.state.todos.filter(todo => todo._id !== id)
            this.setState({todos})
    }

   async toggleTodo(todo) { 
        let updatedTodo = await apiCalls.updateTodo(todo)
        const todos = this.state.todos.map(todo => (
            (todo._id === updatedTodo.id)
            ? {...todo, completed:!todo.completed}
            :todo
            ))
        this.setState({todos:todos})
    }

    render(){
        const todos = this.state.todos.map((todo) => (
           <li key={todo._id} ><span  style={{
            textDecoration: todo.completed? 'line-through': 'none'
             }}
             onClick={this.toggleTodo.bind(this, todo)}>{todo.name}</span>
               <span onClick={this.deleteTodo.bind(this, todo._id)}> X </span></li>
           ))
           
        return(
            <div className="container">
            <header>
                <h1>todo<span>List</span></h1>
                <h2>A simple Todo built with React and Node</h2>
            </header>
            <TodoForm addTodo={this.addTodo} />
            <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList;