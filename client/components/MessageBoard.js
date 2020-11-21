import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { me } from "../store";

class MessageBoard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="viewallcontainer">
        <div className="viewallsidebar">
          <h2>Current Topics:</h2>
        </div>
        <div className="gameview">
          <h1>Murray Messages</h1>
          <div className="messageForm">
            <h2>Post a Message:</h2>
            <Link to="/messageboard/new-message">
              <h2>Form</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBoard;
