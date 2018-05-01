import { connect } from "react-redux";
import ChatWebSocket from "./ChatWebSocket";
import { withRouter } from "react-router-dom";
import { receiveMessage } from "../actions/message";

const mapStateToProps = (state, ownProps) => {
  const chatIds = Object.keys(state.entities.chats);
  return { chatIds };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChatWebSocket)
);
