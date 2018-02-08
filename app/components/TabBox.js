import React from 'react'

export default class TabBox extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const {tabs} = this.props
        return (
            <div className="box">{tabs.index}</div>
        )
    }
}