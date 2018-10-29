import { Redirect, Route, withRouter } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Redirect to="/messages" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, cableApp }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? (
        <Component cableApp={cableApp} {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser) };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null,
  )(Auth),
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null,
  )(Protected),
);
