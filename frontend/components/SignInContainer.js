import { clearErrors, loginAsGuest, signIn, signUp } from "../actions/session";

import SignIn from "./SignIn";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const buttonText =
    ownProps.match.params.category === "signin" ? "sign in" : "sign up";
  const errors = state.errors.session || { username: null, password: null };
  return {
    currentUser: state.session.currentUser,
    buttonText,
    errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction =
    ownProps.match.params.category === "signin" ? signIn : signUp;
  return {
    submitForm: user => dispatch(formAction(user)),
    clearErrors: () => dispatch(clearErrors()),
    loginAsGuest: () => dispatch(loginAsGuest()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignIn),
);
