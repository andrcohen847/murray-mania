import React from "react";
import Phaser from "phaser";
import { preload, create, update } from "./phaser/LevelOne.js";
import GroundHogHome from "./GroundhogHome";

class Game extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      parent: "app",
      width: 800,
      height: 600,
      autoCenter: true,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 }
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    const game = new Phaser.Game(config);
  }

  render() {
    return (
      <div>
        <div className="mainGameView" />
      </div>
    );
  }
}

export default GroundHogHome;
