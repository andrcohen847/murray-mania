import React from "react";
import { connect } from "react-redux";
import {fetchSingleUser, updateUser, deleteUser} from '../store'
import { Link } from 'react-router-dom'
import EditProfileForm from "./EditProfileForm"

class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  componentDidMount() {
    try {
      const {userId} = this.props.match.params
      this.props.loadSingleUser(userId)
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
    const user = this.props.singleUser

    return (
      <div className="user-profile">
        <div className="user-info">
          <h1>Wanna Edit Your Profile?</h1>
        <div className="user-profile-photo">
          <img src={user.imageUrl} />
       </div>
          <h2>Username: <span>{user.userName}</span></h2>
          <h2>Email Address: <span>{user.email}</span></h2>
          <h2>Member since: <span>{user.createdAt}</span> </h2>
        </div>
        <div id="edit-and-delete">
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
              <EditProfileForm
                user={user}
                updateThisUser={this.props.updateThisUser}
              />
            </div>
          ) : (
            <button
              className="hide"
              type="submit"
              value="hide"
              onClick={() => this.toggleShow()}
            >
              Edit Your Profile
            </button>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  singleUser: state.userprofile
})

const mapDispatch = dispatch => ({
  loadSingleUser: id => dispatch(fetchSingleUser(id)),
  updateThisUser: (userId, newInfo) => dispatch(updateUser(userId, newInfo))
})

export default connect(mapState, mapDispatch)(UserProfile)
