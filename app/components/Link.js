import React from 'react'
export default class Link extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {active, children, onClick} = this.props

        if (active) {
            return <span>{children}</span>
        }
        return (
            <a href="javascript:void(0)" onClick={() => onClick()}>{children}</a>
        )
    }
}