/**
 * 定义AddTodo的容器组件
 */
import {connect} from "react-redux";
import AddTodo from "components/AddTodo";
import {addTodo} from "actions/index";
export default connect(
    state => ({todos: state.todos}),
    dispatch => ({
        addTodo: (text) => dispatch(addTodo(text))
    })
)(AddTodo)
