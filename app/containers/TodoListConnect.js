/**
 * 定义TodoList的容器组件
 */
import {connect} from "react-redux";
import TodoList from "components/TodoList";
import {toggleTodo} from "actions/index";

/**
 * 定义一个过滤的方法
 */

const getVisibleTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE'://未完成
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED'://已完成
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

export default connect(
    // 传递到展示组件的数据过滤了
    state => ({todos: getVisibleTodos(state.todos, state.visibilityFilter)}),
    dispatch => ({
        toggleTodo: (id) => dispatch(toggleTodo(id))
    })
)(TodoList)
