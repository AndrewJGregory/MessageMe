import React from "react";
import { withRouter } from "react-router-dom";
import UserSearchIndexContainer from "./UserSearchIndexContainer";
import LogoutButtonContainer from "./LogoutButtonContainer";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      textAlignment: ""
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query });
  }

  componentDidMount() {
    let otherUserId = null;
    this.props
      .fetchUsers("")
      .then(users => {
        otherUserId = Object.values(users)[0].id;
        if (this.props.match.params.userId) {
          otherUserId = this.props.match.params.userId;
        } else {
          this.props.history.push(`/messages/${otherUserId}`);
        }
      })
      .then(() => {
        this.props.createChatAndFetchMessages(otherUserId);
      });
  }

  clearQuery() {
    this.setState({ query: "" });
  }

  render() {
    return (
      <div className="search">
        <div className="user-search-input-container">
          <i className="fa fa-search" />
          <input
            type="text"
            onChange={this.updateInput}
            value={this.state.query}
            placeholder="Search MessageMe"
            className="user-search-input"
          />
        </div>
        <div className="results-logout-btn-container">
          <UserSearchIndexContainer
            clearQuery={this.clearQuery.bind(this)}
            query={this.state.query}
          />
          <div className="logout-btn-container">
            <LogoutButtonContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
