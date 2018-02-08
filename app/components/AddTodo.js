import React from "react"
export default class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this)
    }

    render() {
        return (
            <div className="row">
                <div className="col-8">
                    <input type="text" className="form-input" placeholder="i love u" ref="createInput"/>

                </div>
                <div className="col-4">
                    <button className="btn" onClick={this.addTodo}>创建</button>
                </div>

            </div>

        )
    }

    addTodo() {
        const {addTodo} = this.props
        let myValue = this.refs.createInput;
        addTodo(myValue.value)
        myValue.value = ''
    }
}
// 约束数据类型
AddTodo.protoTypes = {
    addTodo: React.PropTypes.func.isRequired
}