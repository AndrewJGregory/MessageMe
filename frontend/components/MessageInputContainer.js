import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessageInput from "./MessageInput";
import { createMessage } from "../actions/message";

const mapStateToProps = (state, ownProps) => {
  const userReceiverId = ownProps.match.params.userId;
  const userSenderId = state.session.currentUser.id;
  return {
    userReceiverId,
    userSenderId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (content, userSenderId, userReceiverId) =>
      dispatch(createMessage(content, userSenderId, userReceiverId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MessageInput)
);
