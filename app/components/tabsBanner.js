import React from "react"
export default class TabBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const {tabs, toggleTab} = this.props
        console.log(tabs)

        return (
            <ul className="nav">
                {
                    tabs.list.map((i, index) => (
                        <li key={index} className={tabs.index == index ? 'cur' : ''}
                            onClick={() => toggleTab(index)}>{i.text}</li>
                    ))
                }

            </ul>

        )
    }
}
TabBanner.protoTypes = {
    tabs: React.PropTypes.object.isRequired,
    toggleTab: React.PropTypes.func.isRequired
}
