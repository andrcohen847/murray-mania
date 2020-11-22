import React from 'react'
import { addTopic, me, fetchAllTopics } from '../store'
import { connect } from 'react-redux'

export class NewTopicForm extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      userId: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.loadUser()
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

    this.props.fetchAllTopics()

    this.setState({
      name: '',
      userId: '',
      posts: []
    })
}

  render() {
    return (
      <form id="new-topic-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Topic Name:
          <input onChange={this.handleChange} value={this.state.name} name="name" type="text" required />
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
  loadUser: () => dispatch(me()),
  fetchAllTopics: () => dispatch(fetchAllTopics()),
})

export default connect(mapState, mapDispatch)(NewTopicForm)
