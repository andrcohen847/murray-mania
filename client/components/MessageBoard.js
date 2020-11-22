import React from "react";
import { Link } from "react-router-dom";
import {fetchUsers, fetchAllTopics, me
} from '../store'
import { connect } from "react-redux";
import NewTopicForm from "./NewTopicForm"

class MessageBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  componentDidMount() {
    this.props.getUsers()
    this.props.fetchAllTopics()
    this.props.loadUser()
  }

  toggleShow() {
    this.state.showForm
      ? this.setState({showForm: false})
      : this.setState({showForm: true})
  }

  render() {
    const userId = this.props.user.id
    const topics = this.props.topics
    const users = this.props.users

    return (
      <div className="viewallcontainer">
        <div className="viewallsidebar">
        {!topics ? (<h2>No Featured Topics:</h2>) : <h2>Featured Topics:</h2> }
        </div>
        <div className="gameview">
          <h1>Murray Messages</h1>
          <div className="messageForm">
          {!userId ? ( <h2>You must create an account in order to post to Message Boards</h2> ) : (
            <div className="messageboard-logged-in">
            <h2>Create a Topic:</h2>
            {this.state.showForm ? (
              <div id="form-loaded">
                <button
                  className="hide"
                  type="submit"
                  value="hide"
                  onClick={() => this.toggleShow()}
                >
                  Hide Form
                </button>
                <NewTopicForm userId={userId} />
              </div>
            ) : (
              <button
                className="hide"
                type="submit"
                value="hide"
                onClick={() => this.toggleShow()}
              >
                New Topic
              </button>
            )}
            </div>
          )}
            <div className="topic-container">
            {!topics ? (<h2>No Current Topics</h2> ) : (<h2>Current Topics:</h2>)}
              <div className="topic-list">
              <ul>
              {
                  topics.map((topic) => (

                    <li key={topic.id}>{topic.name}</li>
                  ))

              }
              </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


const mapState = state => {
  return {
    topics: state.topics,
    users: state.users,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
    loadUser: () => dispatch(me()),
    fetchAllTopics: () => dispatch(fetchAllTopics()),
  }
}

export default connect(mapState, mapDispatch)(MessageBoard)
