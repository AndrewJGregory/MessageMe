import { connect } from "react-redux";
import { signOut } from "../actions/session";
import Main from "./Main";

const mapStateToProps = state => {
  return {
    username: state.session.currentUser.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
