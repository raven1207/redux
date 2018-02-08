import React from "react"
import {render} from "react-dom"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import todoApp from "reducers/index"
import App from "components/app"


import "siimple.css"

let store = createStore(todoApp, applyMiddleware(thunk))
render(<Provider store={store}><App /></Provider>, document.getElementById("app"))
