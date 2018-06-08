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
    this.props.clearSearchQuery();
    redirectToChat(this, userId);
  }

  render() {
    return (
      <li>
        <ul className="clickable" onClick={this.handleClick}>
          <li>{this.props.user.username}</li>
          <li className="truncate">{this.props.mostRecentMessageContent}</li>
        </ul>
      </li>
    );
  }
}

export default UserSearchIndexItem;
