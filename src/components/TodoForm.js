import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.input);
    }

    handleClear = () => {
        this.props.clearCompleted()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
                <button onClick={this.handleClear}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;