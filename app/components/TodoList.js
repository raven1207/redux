import React from "react"

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {todos, toggleTodo} = this.props;

        return (
            <div className="table table-striped">
                <ul>
                    {todos.map(todo => (

                            <li key={todo.id} onClick={() => toggleTodo(todo.id)}
                                className={todo.completed ? 'red' : ''}>{todo.text}</li>
                        )
                    )}

                </ul>
            </div>
        )
    }
}
TodoList.protoTypes = {
    todos: React.PropTypes.object.isRequired,
    toggleTodo: React.PropTypes.func.isRequired
}
export default TodoList;