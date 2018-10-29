import { connect } from "react-redux";
import Search from "./Search";
import { searchUsers } from "../actions/search";
import { createChatAndFetchMessages } from "../actions/chat";
import {
  setSearchQuery,
  setSelectedUserIdx,
  setHasSearched,
  setSearchFocus,
} from "../actions/ui";
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
