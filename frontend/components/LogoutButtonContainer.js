import LogoutButton from "./LogoutButton";
import { connect } from "react-redux";
import { signOut } from "../actions/session";

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LogoutButton);
