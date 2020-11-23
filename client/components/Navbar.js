import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logout } from "../store";
// import Cart from './cart'

const NavbarComp = ({ handleClick, isLoggedIn, id }) => {
  return (
    <div className="navbar">
      <Link to="/home">
        <img src="/favicon.ico" className="logo" />
      </Link>
      <div>
        <nav>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <button onClick={handleClick}>Logout</button>
              <NavLink to="/games" activeClassName="selected">
                <button>Games</button>
              </NavLink>
              <NavLink to="/soundlab" activeClassName="selected">
                <button>SoundLab</button>
              </NavLink>
              <NavLink to={`/userprofile/${id}`} activeClassName="selected">
                <button>Edit Profile</button>
              </NavLink>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <NavLink to="/login" activeClassName="selected">
                <button>Login</button>
              </NavLink>
              <NavLink to="/signup" activeClassName="selected">
                <button>Signup</button>
              </NavLink>
              <NavLink to="/soundlab" activeClassName="selected">
                <button>SoundLab</button>
              </NavLink>
              <NavLink to="/games">
                <button>Games</button>
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  id: state.user.id
});

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(NavbarComp);

/**
 * PROP TYPES
 */
NavbarComp.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  id: PropTypes.number
};
