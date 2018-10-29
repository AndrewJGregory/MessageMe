import LogoutButtonContainer from "./LogoutButtonContainer";
import PropTypes from "prop-types";
import React from "react";
import UserSearchIndexContainer from "./UserSearchIndexContainer";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAlignment: "",
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
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
    const isLetter = e.key.length === 1;
    if (e.key === "Enter") {
      this.props.searchUsers(this.props.searchQuery);
      this.props.setHasSearched(true);
    } else if (e.key === "Backspace") {
      const searchQuery = this.props.searchQuery.slice(0, -1);
      this.props.setSearchQuery({ searchQuery });
    } else if (e.key === "ArrowDown") {
      this.props.setSelectedUserIdx(this.props.selectedUserIdx + 1);
      this.props.setSearchFocus(false);
    } else if (isLetter) {
      this.props.setHasSearched(false);
      const letter = e.key;
      const searchQuery = this.props.searchQuery.concat(letter);
      this.props.setSearchQuery({ searchQuery });
    }
  }

  componentWillUnmount() {
    this.props.setSearchQuery({ searchQuery: "" });
  }

  render() {
    return (
      <div className="search">
        <div className="user-search-input-container">
          <i className="fa fa-search" />
          <input
            ref={searchBar => {
              this.searchBar = searchBar;
            }}
            type="text"
            onKeyDown={this.submitSearch}
            value={this.props.searchQuery}
            placeholder="Search MessageMe"
            className="user-search-input"
            onClick={this.handleOnClick}
          />
        </div>
        <div className="results-logout-btn-container">
          <UserSearchIndexContainer />
          <div className="logout-btn-container">
            <LogoutButtonContainer />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  userResults: PropTypes.arrayOf(PropTypes.object),
  shouldSearchBeFocused: PropTypes.bool,
  createChatAndFetchMessages: PropTypes.func,
  searchUsers: PropTypes.func,
  setSearchQuery: PropTypes.func,
  setHasSearched: PropTypes.func,
  setSearchFocus: PropTypes.func,
  selectedUserIdx: PropTypes.number,
  searchQuery: PropTypes.string,
};
export default Search;
