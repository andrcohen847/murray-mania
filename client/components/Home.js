import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Home = props => {
  const { email, userName } = props;

  return (
    <Link to="/games">
      <div className="home-container">
        <div className="home-text">
          {email ? (
            <h3>Welcome to Murray Mania, { userName !== "Annonymous" ? (userName) : (email) }</h3>
          ) : (
            <h3>Welcome to Murray Mania!</h3>
          )}
        </div>
        <img className="murray-home" src="BillFace.png" />
      </div>
    </Link>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    userName: state.user.userName
  };
};

export default connect(mapState)(Home);

/**
 * PROP TYPES
 */
Home.propTypes = {
  email: PropTypes.string
};
