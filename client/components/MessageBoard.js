import React from "react";
import { Link } from "react-router-dom";
import {fetchUsers} from '../store'
import { connect } from "react-redux";

class MessageBoard extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const users = this.props.users
    console.log('MessageBoard props', this.props)

    return (
      <div className="viewallcontainer">
        <div className="viewallsidebar">
        {!users.topics ? (
          <h2>No Featured Topics:</h2>
        ) : <h2>Featured Topics:</h2> }
        </div>
        <div className="gameview">
          <h1>Murray Messages</h1>
          <div className="messageForm">
            <h2>Create a Topic:</h2>
              <h2>Form</h2>
            {!users.topics ? (
              <h2>No Current Topics</h2>
            ) : <h2>Current Topics:</h2> }
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapState, mapDispatch)(MessageBoard)
