import React from "react";

class ChatSettingsIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.archiveChat(this.props.chatId, this.props.currentUserId, true);
  }

  render() {
    return <i className="fa fa-cog" onClick={this.handleClick} />;
  }
}

export default ChatSettingsIcon;
