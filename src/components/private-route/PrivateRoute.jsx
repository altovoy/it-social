import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Private routes container, render children if user is authenticated, else redirect to login
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component  />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};
// Define props to import from redux
const mapStateToProps = state => ({
  auth: state.auth
});
// Connect component with Redux
export default connect(mapStateToProps)(PrivateRoute);
