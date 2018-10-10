import React from "react";

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleArchive = this.handleArchive.bind(this);
  }

  handleArchive(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.archiveChat(this.props.chatId, this.props.currentUserId, true);
  }

  render() {
    return (
      <ul className="dropdown-menu">
        <li onClick={this.handleArchive}>Archive</li>
      </ul>
    );
  }
}

export default DropdownMenu;
