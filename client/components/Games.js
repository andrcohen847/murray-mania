import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { me } from "../store";

class Games extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="viewallcontainer">
        <div className="viewallsidebar">
          <h2>High Scores:</h2>
        </div>
        <div className="gameview">
          <h1>Our Featured Games:</h1>
          <div className="gamediv">
            <h2>Gather The Groundhogs:</h2>
            <h4>(Click image to play)</h4>
            <Link to="/games/gatherthegroundhog">
              <div className="gameimg">
                <img src="/groundhogs-day.jpg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
