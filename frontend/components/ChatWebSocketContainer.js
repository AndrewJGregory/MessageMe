import { connect } from "react-redux";
import ChatWebSocket from "./ChatWebSocket";
import { withRouter } from "react-router-dom";
import {
  receiveMessage,
  seeMessageBackend,
  receiveMessagePayload
} from "../actions/message";
import { receiveChat } from "../actions/chat";
import { receiveUser } from "../actions/user";

const mapStateToProps = (state, ownProps) => {
  const chatIds = Object.keys(state.entities.chats);
  return { chatIds };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveUser: user => dispatch(receiveUser(user)),
    receiveChat: chat => dispatch(receiveChat(chat)),
    seeMessage: message => dispatch(seeMessageBackend(message)),
    receiveMessagePayload: payload => dispatch(receiveMessagePayload(payload))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatWebSocket)
);
