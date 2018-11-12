import {
  receiveMessage,
  receiveMessagePayload,
  seeMessageBackend,
} from "../actions/message";

import ChatWebSocket from "./ChatWebSocket";
import { connect } from "react-redux";
import { findChatId } from "../util/chat";
import { receiveChat } from "../actions/chat";
import { receiveUser } from "../actions/user";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  const selfChatId = findChatId(state, currentUserId, currentUserId);
  return { selfChatId };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveUser: user => dispatch(receiveUser(user)),
    receiveChat: chat => dispatch(receiveChat(chat)),
    seeMessage: message => dispatch(seeMessageBackend(message)),
    receiveMessagePayload: payload => dispatch(receiveMessagePayload(payload)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ChatWebSocket),
);
