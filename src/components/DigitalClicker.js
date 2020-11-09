// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (event) => {
        // console.log(event)
        // console.log(this.state.timesClicked)
        let newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker