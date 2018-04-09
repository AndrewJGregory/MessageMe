import React from "react";
import { withRouter } from "react-router-dom";
import UserSearchIndexContainer from "./UserSearchIndexContainer";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      textAlignment: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.leftAlignText = this.leftAlignText.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
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
        this.createChatAndFetchMessages(otherUserId);
      });
  }

  createChatAndFetchMessages(
    otherUserId,
    currentUserId = this.props.currentUserId
  ) {
    this.props.createChat(currentUserId, otherUserId).then(chat => {
      let chatId = Object.keys(chat);
      this.props.fetchMessages(chatId);
    });
  }

  leftAlignText(e) {
    e.preventDefault();
    this.setState({
      textAlignment: "left-text-align"
    });
  }

  handleOnBlur(e) {
    e.preventDefault();
    this.setState({ textAlignment: "" });
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
            id={`${this.state.textAlignment}`}
            onFocus={this.leftAlignText}
            onBlur={this.handleOnBlur}
          />
        </div>
        <UserSearchIndexContainer query={this.state.query} />
      </div>
    );
  }
}

export default withRouter(Search);
