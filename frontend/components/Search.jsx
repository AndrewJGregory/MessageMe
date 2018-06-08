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
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    this.props.setSearchQuery({ searchQuery });
    this.props.fetchUsers(searchQuery);
  }

  render() {
    return (
      <div className="search">
        <div className="user-search-input-container">
          <i className="fa fa-search" />
          <input
            type="text"
            onChange={this.updateInput}
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
