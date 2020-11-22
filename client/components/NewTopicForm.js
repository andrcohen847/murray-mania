import React from 'react'
import { addTopic } from '../store'
import { connect } from 'react-redux'

export class NewCampusForm extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      userId: '',
      posts: [{
        name: '',
        description: '',
        userId: '',
        topicId: '',
      }]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {target: {name, value}} = event;
    this.setState({ [name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addNewTopic({
      name: this.state.name,
      userId: this.props.userId,
      posts: [{
        name: this.state.props.name,
        description: this.state.props.description,
      }]
    })

    this.setState({
      name: '',
      userId: '',
      posts: [{
        name: '',
        description: '',
      }]
    })
}

  render() {
    return (
      <form id="new-topic-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Topic Name:
          <input onChange={this.handleChange} value={this.state.name} name="name" type="text" required />
        </label>
        <label htmlFor="post-name">
          Post Name:
          <input onChange={this.handleChange} value={this.state.posts} name="address" type="text" required />
        </label>
        <label htmlFor="description">
          Description:
          <input onChange={this.handleChange} value={this.state.description} name="description" type="text" required />
        </label>
        <label htmlFor="imageUrl">
          Campus Image Url:
          <input onChange={this.handleChange} value={this.state.imageUrl} name="imageUrl" type="text" />
        </label>
        <button className="submit" type="submit" value="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  addNewCampus: campus => dispatch(addCampus(campus))
})

export default connect(null, mapDispatch)(NewCampusForm)
