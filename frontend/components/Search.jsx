import React from "react";
import UserSearchResult from "./UserSearchResult";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      textAlignment: "",
      shouldUsersBeDisplayed: false
    };
    this.updateInput = this.updateInput.bind(this);
    this.leftAlignText = this.leftAlignText.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  leftAlignText(e) {
    e.preventDefault();
    this.setState({
      textAlignment: "left-text-align",
      shouldUsersBeDisplayed: true
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

  handleOnBlur(e) {
    e.preventDefault();
    this.setState({ textAlignment: "", shouldUsersBeDisplayed: false });
  }

  handleClick(e) {
    e.preventDefault();
    const id = e.target.dataset.userId;
    let chatId = null;
    this.props.history.push(`/messages/${id}`);
    this.createChatAndFetchMessages(id);
  }

  render() {
    const regExp = new RegExp(`${this.state.query}`);
    let users = null;
    users = this.props.userResults.reduce((users, user) => {
      if (regExp.test(user.username)) {
        users.push(<UserSearchResult user={user} key={user.id} />);
      }
      return users;
    }, []);

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
        <ul className="user-search-results" onClick={this.handleClick}>
          {users}
        </ul>
      </div>
    );
  }
}

export default withRouter(Search);
