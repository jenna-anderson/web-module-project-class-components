// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import { render } from '@testing-library/react'
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    return(
        <div className='taskContainer'>
            {props.todoData.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
        </div>
    )
}

// class TodoList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todoData: this.props.todoData
//         }
//     }
//     render() {
//         return(
//             {this.props.todoData.map(item => (
//                 <Todo key={item.id} item={item}/>
//             ))
//             }
//         )
//     }
// }

export default TodoList;
