import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)

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

  handleBitRate = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      }
    })
  }

  handleResolution = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...this.state.settings,
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
        <button onClick={this.handleBitRate} className="bitrate">
          {this.state.settings.bitrate} Bitrate
        </button><br/>
        <button onClick={this.handleResolution} className="resolution">
          {this.state.settings.video.resolution} Resolution
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger
