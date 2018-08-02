import React from "react";
import { withRouter } from "react-router-dom";
import UserSearchIndexContainer from "./UserSearchIndexContainer";
import LogoutButtonContainer from "./LogoutButtonContainer";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAlignment: ""
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.searchBar = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedUserIdx === 0) this.searchBar.focus();
    else this.searchBar.blur();
  }

  submitSearch(e) {
    e.preventDefault();
    const isLetter = e.key.length === 1;
    if (e.key === "Enter") {
      this.props.fetchUsers(this.props.searchQuery);
    } else if (e.key === "Backspace") {
      const searchQuery = this.props.searchQuery.slice(0, -1);
      this.props.setSearchQuery({ searchQuery });
    } else if (e.key === "ArrowDown") {
      this.props.incrementSelectedUserIdx();
    } else if (e.key === "ArrowUp") {
      this.props.decrementSelectedUserIdx();
    } else if (isLetter) {
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

export default withRouter(Search);
