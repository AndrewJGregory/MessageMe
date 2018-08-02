import { connect } from "react-redux";
import UserSearchIndexItem from "./UserSearchIndexItem";
import { findMostRecentMessage } from "../util/message";
import { withRouter } from "react-router-dom";
import { createChatAndFetchMessages } from "../actions/chat";
import {
  clearSearchQuery,
  incrementSelectedUserIdx,
  decrementSelectedUserIdx
} from "../actions/ui";
import { seeMessageBackend } from "../actions/message";

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.user.id;
  const mostRecentMessage = findMostRecentMessage(state, userId);
  const { selectedUserIdx } = state.ui;
  return {
    mostRecentMessage,
    selectedUserIdx
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    clearSearchQuery: () => dispatch(clearSearchQuery()),
    seeMessage: message => dispatch(seeMessageBackend(message)),
    incrementSelectedUserIdx: () => dispatch(incrementSelectedUserIdx()),
    decrementSelectedUserIdx: () => dispatch(decrementSelectedUserIdx())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserSearchIndexItem)
);
