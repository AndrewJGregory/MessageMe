import { connect } from "react-redux";
import LogoutButton from "./LogoutButton";
import { signOutThunk } from "../actions/session";

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOutThunk())
  };
};

export default connect(null, mapDispatchToProps)(LogoutButton);
