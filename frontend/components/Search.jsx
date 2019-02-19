import PropTypes from "prop-types";
import React from "react";
import UserSearchIndexContainer from "./UserSearchIndexContainer";
import { getValidInput } from "../util/message";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.searchBar = React.createRef();
  }

  componentDidUpdate(prevProps) {
    this.props.selectedUserIdx === 0 && this.props.shouldSearchBeFocused
      ? this.searchBar.focus()
      : this.searchBar.blur();
  }

  handleOnClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.setSelectedUserIdx(0);
    this.props.setSearchFocus(true);
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.searchUsers(this.props.searchQuery).then(() => {
      this.props.setHasSearched(true);
    });
  }

  updateSearchInput(e) {
    e.preventDefault();
    const lastChar = e.target.value[e.target.value.length - 1];
    if (getValidInput().has(lastChar) || lastChar === undefined) {
      this.props.setHasSearched(false);
      this.props.setSearchQuery({ searchQuery: e.target.value });
    }
  }

  render() {
    return (
      <div className="search">
        <div className="user-search-input-container" tabIndex="0">
          <i className="fa fa-search" />
          <form onSubmit={this.submitSearch}>
            <input
              ref={searchBar => {
                this.searchBar = searchBar;
              }}
              type="text"
              onChange={this.updateSearchInput}
              value={this.props.searchQuery}
              placeholder="Search MessageMe"
              className="user-search-input"
              onClick={this.handleOnClick}
            />
          </form>
        </div>
        <div className="results-logout-btn-container">
          <UserSearchIndexContainer />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  userResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  shouldSearchBeFocused: PropTypes.bool.isRequired,
  createChatAndFetchMessages: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  setHasSearched: PropTypes.func.isRequired,
  setSearchFocus: PropTypes.func.isRequired,
  selectedUserIdx: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default Search;
