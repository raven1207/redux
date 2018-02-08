import React from "react"
import AddTodoConnect from "containers/AddTodoConnect"
import TodoListConnect from "containers/TodoListConnect"
import Footer from './Footer';
import TabBannerConnect from "containers/TabBannerConnect"
import TabBox from './TabBox'
import TabConnect from "containers/TabConnect"

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            // todoList
            <div>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <h1>This is thie first todoList React-Redux</h1>
                        <AddTodoConnect />
                        <TodoListConnect />
                        <Footer />
                    </div>
                    <div className='col-3'></div>

                </div>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <h1>This is thie first tab React-Redux</h1>
                        <TabBannerConnect  />
                        <TabConnect />
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>

        )
    }
}
export default App

