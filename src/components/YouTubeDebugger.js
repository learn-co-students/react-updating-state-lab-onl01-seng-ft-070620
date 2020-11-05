// Code YouTubeDebugger Component Here
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
      } // end settings
    } // end state
  } // end constructor

  toggleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  toggleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.toggleBitrate}>
          Bitrate: {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.toggleResolution}>
          Resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }

}
