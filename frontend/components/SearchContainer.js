import { connect } from "react-redux";
import Search from "./Search";
import { searchUsers } from "../actions/search";
import { createChatAndFetchMessages } from "../actions/chat";
import {
  setSearchQuery,
  setSelectedUserIdx,
  setHasSearched,
} from "../actions/ui";

const mapStateToProps = state => {
  const searchQuery = state.ui.searchQuery;
  const { selectedUserIdx } = state.ui;
  return {
    userResults: Object.values(state.entities.users),
    searchQuery,
    selectedUserIdx,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    searchUsers: query => dispatch(searchUsers(query)),
    setSearchQuery: query => dispatch(setSearchQuery(query)),
    setSelectedUserIdx: idx => dispatch(setSelectedUserIdx(idx)),
    setHasSearched: bool => dispatch(setHasSearched(bool)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
