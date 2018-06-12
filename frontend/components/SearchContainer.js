import { connect } from "react-redux";
import Search from "./Search";
import { fetchUsers } from "../actions/search";
import { createChatAndFetchMessages } from "../actions/chat";
import { setSearchQuery } from "../actions/ui";

const mapStateToProps = state => {
  const searchQuery = state.ui.searchQuery;
  return {
    userResults: Object.values(state.entities.users),
    searchQuery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    fetchUsers: query => dispatch(fetchUsers(query)),
    setSearchQuery: query => dispatch(setSearchQuery(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
