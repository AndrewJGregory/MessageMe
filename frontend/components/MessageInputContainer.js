import MessageInput from "./MessageInput";
import { connect } from "react-redux";
import { createMessage } from "../actions/message";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const userReceiverId = ownProps.match.params.userId;
  const userSenderId = state.session.currentUser.id;
  const { selectedUserIdx } = state.ui;

  return {
    userReceiverId,
    userSenderId,
    selectedUserIdx,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (content, userSenderId, userReceiverId) =>
      dispatch(createMessage(content, userSenderId, userReceiverId)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MessageInput),
);
