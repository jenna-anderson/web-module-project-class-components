import React, { useState } from 'react'

const Todo = props => {
    return(
        <div>
            <p>{props.item.task}</p>
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