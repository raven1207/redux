let nextTodo=0;
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'SHOW_ALL'
export const TOGGLE_TAB='TOGGLE_TAB'
export const FIRST='FIRST'
//定义个添加的action

export const addTodo=(text)=>({
	  type:ADD_TODO,
	  id:nextTodo++,
	  text
});
//定义个切换的action
export const toggleTodo=(id)=>({
	type:TOGGLE_TODO,
	id
});
// 定义一个是否显示的action,每次发送出去的的type是一样的
export const setVisibilityFilter=(filter)=>({
	type:SET_VISIBILITY_FILTER,
	filter
});
//定义tab切换的action
export const toggleTab=(index)=>({
	type:TOGGLE_TAB,
	index
})