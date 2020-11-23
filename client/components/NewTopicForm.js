import React from 'react'
import { addTopic, me, fetchAllTopics, addPost } from '../store'
import { connect } from 'react-redux'

export class NewTopicForm extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      userId: '',
      posts: [],
      postName: '',
      postDescription: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.loadUser()
    this.props.fetchAllTopics()
  }

  handleChange(event) {
    const {target: {name, value}} = event;
    this.setState({ [name]: value})
  }

  handleSubmit(event) {

    event.preventDefault()
    this.props.addNewTopic({
      name: this.state.name,
      userId: this.props.user.id,
      posts: []
    })

    this.props.addNewPost({
      name: this.state.postName,
      description: this.state.postDescription,
      userId: this.props.user.id,
      topicId: (this.props.topics.length) + 1
    })


    this.props.fetchAllTopics()


    this.setState({
      name: '',
      userId: '',
      posts: [],
      postName: '',
      postDescription: '',
    })

}

  render() {
    return (
      <form id="new-topic-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Topic Name:
          <input onChange={this.handleChange} value={this.state.name} name="name" type="text" required />
        </label>
        <label htmlFor="name">
          Post Name:
          <input onChange={this.handleChange} value={this.state.postName} name="postName" type="text" required />
        </label>
          <label htmlFor="postDescription">
          Post Description:
          <input onChange={this.handleChange} value={this.state.postDescription} name="postDescription" type="text" required />
        </label>
        <button className="submit" type="submit" value="submit">Submit</button>
      </form>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    topics: state.topics,
  }
}

const mapDispatch = dispatch => ({
  addNewTopic: topic => dispatch(addTopic(topic)),
  addNewPost: post => dispatch(addPost(post)),
  loadUser: () => dispatch(me()),
  fetchAllTopics: () => dispatch(fetchAllTopics()),
})

export default connect(mapState, mapDispatch)(NewTopicForm)
