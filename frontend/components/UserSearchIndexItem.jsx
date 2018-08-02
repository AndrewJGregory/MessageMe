import React from "react";
import { redirectToChat } from "../util/chat";

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.userResult = React.createRef();
  }

  componentDidUpdate(prevProps) {
    // create illusion: change color(class) and listen for enter in
    // search bar. if user starts typing, reset the selected user idx
    // to 0 which removes the fake "selected" appearance
    if (prevProps.selectedUserIdx !== this.props.selectedUserIdx) {
      if (this.props.idx === this.props.selectedUserIdx) {
        this.setState({ hovered: "hovered" });
        this.userResult.focus();
      } else {
        this.setState({ hovered: "" });
        this.userResult.blur();
      }
    }
  }

  handleKeyDown(e) {
    e.preventDefault();
    if (e.key === "ArrowDown") {
      this.props.incrementSelectedUserIdx();
    } else if (e.key === "ArrowUp") {
      this.props.decrementSelectedUserIdx();
    }
  }

  handleClick(e) {
    e.preventDefault();
    const userId = this.props.user.id;
    if (this.props.mostRecentMessage.id) {
      this.props
        .seeMessage(this.props.mostRecentMessage)
        .then(() => redirectToChat(this, userId));
    } else {
      redirectToChat(this, userId);
    }
    this.props.clearSearchQuery();
  }

  formatTime() {
    const timestamp = this.props.mostRecentMessage.created_at;
    let time = null;
    if (timestamp) {
      const milliseconds = Date.parse(timestamp);
      const date = new Date(milliseconds);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours > 12 ? hours % 12 : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      time = `${hours}:${minutes}${ampm}`;
    }
    return time;
  }

  render() {
    const mostRecentMessageTime = this.formatTime();
    const bold = this.props.mostRecentMessage.is_seen ? "" : "bold";
    return (
      <li
        className={`clickable ${this.state.hovered}`}
        onClick={this.handleClick}
      >
        <input
          ref={userResult => {
            this.userResult = userResult;
          }}
          type="text"
          className="hidden-input"
          onKeyDown={this.handleKeyDown}
        />
        <ul className="user-search-result">
          <li className="user-search-result-info">
            <div>{this.props.user.username}</div>
            <div className="most-recent-time gray-text">
              {mostRecentMessageTime}
            </div>
          </li>
          <li className={`truncate gray-text ${bold}`}>
            {this.props.mostRecentMessage["content"] || null}
          </li>
        </ul>
      </li>
    );
  }
}

export default UserSearchIndexItem;
