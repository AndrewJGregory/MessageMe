import {
  setHasSearched,
  setSearchFocus,
  setSearchQuery,
  setSelectedUserIdx,
} from "../actions/ui";

import Search from "./Search";
import { connect } from "react-redux";
import { createChatAndFetchMessages } from "../actions/chat";
import { searchUsers } from "../actions/search";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  const searchQuery = state.ui.searchQuery;
  const { selectedUserIdx, shouldSearchBeFocused } = state.ui;
  return {
    userResults: Object.values(state.entities.users),
    searchQuery,
    selectedUserIdx,
    shouldSearchBeFocused,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    searchUsers: query => dispatch(searchUsers(query)),
    setSearchQuery: query => dispatch(setSearchQuery(query)),
    setSelectedUserIdx: idx => dispatch(setSelectedUserIdx(idx)),
    setHasSearched: bool => dispatch(setHasSearched(bool)),
    setSearchFocus: bool => dispatch(setSearchFocus(bool)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search),
);
