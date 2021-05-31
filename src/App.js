import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoData = [
  {
    task: 'Pet my dog',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoData: todoData
    }
  }

  addItem = (item) => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoData: [...this.state.todoData, newItem]
    })

  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData}/>
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
