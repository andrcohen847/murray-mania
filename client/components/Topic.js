import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  fetchSingleTopic,
  updateTopic,
  deleteTopic
} from '../store'
import NewPostForm from './NewPostForm'

class Topic extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  componentDidMount() {
    try {
      const topicId = this.props.match.params.topicId
      this.props.loadSingleTopic(topicId)
    } catch (error) {
      console.error(error)
    }
  }

  toggleShow() {
    this.state.showForm
      ? this.setState({showForm: false})
      : this.setState({showForm: true})
  }

  render() {

  const topic = this.props.topic
  const user = this.props.user
  const posts = this.props.topic.posts

    return (
      <div className="viewallcontainer">
        <div className="gameview">
          <h1>{topic.name}</h1>
          <div className="messageForm">
          {!user.userId ? ( <h2>You must create an account in order to post to Message Boards</h2> ) : (
            <div className="messageboard-logged-in">
            <h2>Add a Post:</h2>
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
                <NewPostForm userId={user.userId} />
              </div>
            ) : (
              <button
                className="hide"
                type="submit"
                value="hide"
                onClick={() => this.toggleShow()}
              >
                New Post
              </button>
            )}
            </div>
          )}
            <div className="topic-container">
            {!posts ? (<h2>No Current Posts</h2> ) : (<h2>Current Posts:</h2>)}
              <div className="post-list">
              <ul>
              {
                  posts.map((post) => (
                    <li key={post.id}>{post.name}</li>
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


const mapState = state => ({
  topic: state.topic,
  user: state.user
})

const mapDispatch = dispatch => ({
  loadSingleTopic: topicId => dispatch(fetchSingleTopic(topicId)),
  updateThisTopic: (topicId, newInfo) =>
    dispatch(updateTopic(topicId, newInfo)),
  destroyTopic: topicId => dispatch(deleteTopic(topicId)),
})

export default connect(mapState, mapDispatch)(Topic)
