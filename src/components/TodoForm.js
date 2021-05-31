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

    render() {
        console.log(this.state.input)
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;