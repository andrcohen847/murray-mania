import React from 'react'
import {Howl} from 'howler'
import BackgroundMusic from './BackgroundMusic'

class SoundLab extends React.Component {
  constructor() {
    super()
    this.state = {
      playBackgroundMusic: false
    }

    this.soundEffects = new Howl({
      src: ['./effects/effects.webm', './effects/effects.mp3'],
      sprite: {
        chicken_cross_road: [0, 3030.204081632653],
        clean_up_your_room: [5000, 1541.224489795918],
        he_slimed_me: [8000, 1541.224489795919],
        im_not_crazy: [11000, 3030.204081632654],
        in_the_hole: [16000, 1484.6258503401373],
        kicked_ass: [19000, 3030.204081632654],
        pick_up_your_feet: [24000, 1541.224489795919],
        stand_up_straight: [27000, 1541.224489795919],
        take_it_like_a_man: [30000,1541.224489795919]
      }
    })

    this.handleSlime = this.handleSlime.bind(this)
    this.handleHole = this.handleHole.bind(this)
    this.handleKickAss = this.handleKickAss.bind(this)
    this.handleChicken = this.handleChicken.bind(this)
    this.handleRoom = this.handleRoom.bind(this)
    this.handleCrazy = this.handleCrazy.bind(this)
    this.handleFeet = this.handleFeet.bind(this)
    this.handleStand = this.handleStand.bind(this)
    this.handleMan = this.handleMan.bind(this)
    this.togglePlay = this.togglePlay.bind(this)
  }

  togglePlay() {
    this.state.playBackgroundMusic
      ? this.setState({playBackgroundMusic: false})
      : this.setState({playBackgroundMusic: true})
  }

  handleMan(){
    this.soundEffects.play('take_it_like_a_man')
  }

  handleStand(){
    this.soundEffects.play('stand_up_straight')
  }

  handleFeet(){
    this.soundEffects.play('pick_up_your_feet')
  }

  handleCrazy(){
    this.soundEffects.play('im_not_crazy')
  }

  handleRoom(){
    this.soundEffects.play('clean_up_your_room')
  }

  handleChicken(){
    this.soundEffects.play('chicken_cross_road')
  }

  handleSlime(){
    this.soundEffects.play('he_slimed_me')
  }
  handleHole(){
    this.soundEffects.play('in_the_hole')
  }
  handleKickAss(){
    this.soundEffects.play('kicked_ass')
  }

  render() {
    return (
    <div className="sound-lab">
    {this.state.playBackgroundMusic ? (
      <div className="music-playing">
        <button
          className="hide"
          type="submit"
          value="hide"
          onClick={() => this.togglePlay()}
        >
          Stop the Jams
        </button>
        <BackgroundMusic />
      </div>
    ) : (
      <button
        className="hide"
        type="submit"
        value="hide"
        onClick={() => this.togglePlay()}
      >
        Start the Jams
      </button>
    )}
    <div className="sound-lab-container">
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>"PICK UP YOUR FEET!</h4>
        </div>
        <img src="bill_1.png" onClick={this.handleFeet} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>"STAND UP STRAIGHT!</h4>
        </div>
        <img src="bill_2.png" onClick={this.handleStand} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>"TAKE IT LIKE A MAN!</h4>
        </div>
        <img src="bill_3.png" onClick={this.handleMan} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>"I'M NOT CRAZY!</h4>
        </div>
        <img src="bill_4.png" onClick={this.handleCrazy} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
        <h4>"CLEAN UP YOUR ROOM!</h4>
        </div>
        <img src="bill_5.png" onClick={this.handleRoom} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>"WHY DID THE CHICKEN CROSS THE ROAD?</h4>
        </div>
        <img src="bill_6.png" onClick={this.handleChicken} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>HE SLIMED ME!</h4>
        </div>
        <img src="bill_7.png" onClick={this.handleSlime} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>IT'S IN THE HOLE!</h4>
        </div>
        <img src="bill_8.png" onClick={this.handleHole} />
      </div>
      <div className="sound-box">
        <div className="sound-box-text">
          <h4>WE CAME, WE SAW. WE KICKED ITS ASS!</h4>
        </div>
        <img src="bill_9.png" onClick={this.handleKickAss} />
      </div>
      </div>
    </div>
    )
  }
}

export default SoundLab
