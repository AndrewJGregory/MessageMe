import { connect } from "react-redux";
import MessageHeader from "./MessageHeader";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let username;
  try {
    username = state.search.users[ownProps.match.params.userId]["username"];
  } catch (e) {
    username = null;
  }
  return {
    username
  };
};

export default withRouter(connect(mapStateToProps, null)(MessageHeader));
