import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { Login, Signup, Home, Games, MessageBoard, UserProfile, Topic, SoundLab } from "./components";

import { me } from "./store";
import GroundHogHome from "./components/gamesfolder/groundhogfolder/GroundHogGame";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    // const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route exact path="/userprofile/:userId" component={UserProfile} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/messageboard" component={MessageBoard} />
        <Route exact path="/messageboard/:topicId" component={Topic} />
        <Route exact path="/soundlab" component={SoundLab} />
        <Route
          exact
          path="/games/gatherthegroundhog"
          component={GroundHogHome}
        />

        {/* {isLoggedIn && (
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        )} */}
        {/* Displays our Login component as a fallback */}
        <Redirect from="/" to="/home" />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
});

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me())
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
