import { connect } from "react-redux";
import SignIn from "./SignIn";
import { signIn, signUp } from "../actions/session";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const buttonText =
    ownProps.match.params.category === "signin" ? "sign in" : "sign up";
  return {
    currentUser: state.session.currentUser,
    buttonText
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction =
    ownProps.match.params.category === "signin" ? signIn : signUp;
  return {
    submitForm: user => dispatch(formAction(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
