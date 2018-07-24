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
  }

  submitSearch(e) {
    e.preventDefault();
    console.log(e.key);
    if (e.key === "Enter") {
      this.props.fetchUsers(this.props.searchQuery);
    } else if (e.key === "Backspace") {
      const searchQuery = this.props.searchQuery.slice(0, -1);
      this.props.setSearchQuery({ searchQuery });
    } else {
      const letter = e.key;
      const searchQuery = this.props.searchQuery.concat(letter);
      this.props.setSearchQuery({ searchQuery });
    }
  }
  render() {
    return (
      <div className="search">
        <div className="user-search-input-container">
          <i className="fa fa-search" />
          <input
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
