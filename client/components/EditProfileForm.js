import React from 'react'

class EditProfileForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      userName: '',
      imageUrl: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const user = this.props.user

    this.setState({
      email: user.email,
      password: user.password,
      userName: user.userName,
      imageUrl: user.imageUrl
    })
  }

  handleChange(event) {
    const {target: {name, value}} = event
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()

    const userId = this.props.user.id

    this.props.updateThisUser(userId, this.state)
    this.setState({
      email: '',
      password: '',
      userName: '',
      imageUrl: ''
    })
  }

  render() {
    return (
      <div>
        <form id="edit-user-form" onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Edit Email Address:
            <input
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="text"
            />
          </label>
          <label htmlFor="password">
            Edit Password:
            <input
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              type="text"
            />
          </label>
          <label htmlFor="email">
            Edit Username:
          <input
            onChange={this.handleChange}
            value={this.state.userName}
            name="userName"
            type="text"
          />
        </label>
        <label htmlFor="email">
        Edit Profile Pic:
      <input
        onChange={this.handleChange}
        value={this.state.imageUrl}
        name="imageUrl"
        type="text"
      />
    </label>
          <button className="submit" type="submit" value="submit">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default EditProfileForm
