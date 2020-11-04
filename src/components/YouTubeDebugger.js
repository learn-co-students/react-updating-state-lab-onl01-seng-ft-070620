import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    changeBitrate = (e) => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    changeResolution = (e) => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button
                    className={"bitrate"}
                    onClick={this.changeBitrate}
                ></button>
                <button
                    className={"resolution"}
                    onClick={this.changeResolution}
                ></button>
            </div>
        )
    }
}