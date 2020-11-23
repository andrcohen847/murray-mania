import React from 'react'
import {Howl} from 'howler'

class BackgroundMusic extends React.Component {
  constructor() {
    super()

    this.music = new Howl({
      src: ['./music/theme.webm', './music/theme.mp3'],
      html5: true,
      loop: true
    })
  }

  componentDidMount() {
    this.music.play()
  }

  componentWillUnmount() {
    this.music.fade(this.music.volume(), 0, 1000)
    this.music.stop()
  }

  render() {
    return (
      <div className="background-music">
      </div>
    )
  }
}

export default BackgroundMusic
