import React, { useState } from 'react'

const Todo = props => {
    const handleClick = () => {
        props.toggleItem(props.item.id)
    }
    return(
        <div onClick={handleClick} className={`item ${props.item.completed ? 'completed' : ''}`}>
            <li className='task'>{props.item.task}</li>
        </div>
    )
}

// class Todo extends React.Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         todoData: this.todoData
//     //     }

//     // }
//     render() {
//         return(
//             <div>
//                 <p>{this.props.todoData}</p>
//             </div>
//         )
//     }
// }

export default Todo;