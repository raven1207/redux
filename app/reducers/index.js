import {combineReducers} from "redux"
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SHOW_ALL, TOGGLE_TAB, FIRST} from "actions/index"
const todos = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:

            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

// 定义个底部的reducer
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state

    }
}
//定义个tab导航的reducer
const arr = {
    list: [{text: '第一个'}, {text: '第二个'}, {text: '第三个'}],
    index: 0
}
const tabs = (state = arr, action) => {
    switch (action.type) {
        case TOGGLE_TAB:
            state.index = action.index
            return Object.assign({}, arr, state)
        default:
            return state

    }
}

// 利用redux里面的combineReducers合并所有的reducer
const todoApp = combineReducers({
    todos,
    visibilityFilter,
    tabs
})

export default todoApp