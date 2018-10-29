import React from "react";
import { redirectToChat } from "../util/chat";
import ChatSettingsIconContainer from "./ChatSettingsIconContainer";
import PropTypes from "prop-types";

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.userResult = React.createRef();
    this.toggleBackgroundColor = this.toggleBackgroundColor.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedUserIdx !== this.props.selectedUserIdx) {
      if (this.props.idx === this.props.selectedUserIdx) {
        this.userResult.focus();
      } else {
        this.userResult.blur();
      }
    }
  }

  handleKeyDown(e) {
    e.preventDefault();
    if (e.key === "ArrowDown") {
      const nextIdx = this.props.selectedUserIdx + 1;
      if (nextIdx <= this.props.totalUsers) {
        this.props.setSelectedUserIdx(nextIdx);
      } else {
        this.props.setSelectedUserIdx(0);
        this.props.setSearchFocus(true);
      }
    } else if (e.key === "ArrowUp") {
      this.props.setSelectedUserIdx(this.props.selectedUserIdx - 1);
    } else if (e.key === "Enter") {
      this.handleClick(e);
    }
  }

  toggleBackgroundColor() {
    const hovered = this.state.hovered ? "" : "darker-burlywood";
    this.setState({ hovered });
  }

  handleClick(e) {
    e.preventDefault();
    const userId = this.props.user.id;
    if (this.props.mostRecentMessage.id) {
      this.props.seeMessage(this.props.mostRecentMessage).then(() => {
        redirectToChat(this, userId);
      });
    } else {
      redirectToChat(this, userId);
    }
    this.props.clearSearchQuery();
    this.props.setSelectedUserIdx(-1);
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
    const cog =
      this.props.currentUserId === this.props.user.id ? null : (
        <ChatSettingsIconContainer userId={this.props.user.id} />
      );
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
          onFocus={this.toggleBackgroundColor}
          onBlur={this.toggleBackgroundColor}
        />
        <ul className="user-search-result">
          <li>
            <div>{this.props.user.username}</div>
            <div className="most-recent-time gray-text">
              {mostRecentMessageTime}
            </div>
          </li>
          <li>
            <p className={`truncate gray-text ${bold}`}>
              {this.props.mostRecentMessage["content"] || null}
            </p>
            {cog}
          </li>
        </ul>
      </li>
    );
  }
}

UserSearchIndexItem.propTypes = {
  archiveChat: PropTypes.func,
  createChatAndFetchMessages: PropTypes.func,
  clearSearchQuery: PropTypes.func,
  seeMessage: PropTypes.func,
  setSelectedUserIdx: PropTypes.func,
  setSearchFocus: PropTypes.func,
  currentUserId: PropTypes.number,
  selectedUserIdx: PropTypes.number,
  userId: PropTypes.number,
  mostRecentMessage: PropTypes.object,
  searchQuery: PropTypes.string,
};

export default UserSearchIndexItem;
