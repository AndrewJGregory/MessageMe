import { connect } from "react-redux";
import Search from "./Search";
import { fetchUsers } from "../actions/search";
import { createChatAndFetchMessages } from "../actions/chat";
import { setSearchQuery, incrementSelectedUserIdx } from "../actions/ui";

const mapStateToProps = state => {
  const searchQuery = state.ui.searchQuery;
  const { selectedUserIdx } = state.ui;
  return {
    userResults: Object.values(state.entities.users),
    searchQuery,
    selectedUserIdx
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    fetchUsers: query => dispatch(fetchUsers(query)),
    setSearchQuery: query => dispatch(setSearchQuery(query)),
    incrementSelectedUserIdx: () => dispatch(incrementSelectedUserIdx())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
