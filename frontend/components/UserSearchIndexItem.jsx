import React from "react";
import { redirectToChat } from "../util/chat";

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
      <li className="clickable" onClick={this.handleClick}>
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
