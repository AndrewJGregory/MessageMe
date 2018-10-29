import MessageHeader from "./MessageHeader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const otherUser = state.entities.users[ownProps.match.params.userId];
  let username = otherUser ? otherUser["username"] : null;
  return {
    username,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(MessageHeader),
);
