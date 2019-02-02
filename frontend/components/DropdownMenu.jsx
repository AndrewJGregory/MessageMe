import PropTypes from "prop-types";
import React from "react";

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    let choice = e.target.innerText;
    if (choice === "Mark as Unread") choice = "MarkAsUnread";
    this[`handle${choice}`]();
    this.props.closeDropdownMenu();
  }

  handleArchive() {
    this.props.archiveChat(this.props.chatId, this.props.currentUserId, true);
  }

  handleDelete() {
    this.props.openModal();
  }

  handleMarkAsUnread() {
    this.props.setMessageStatus(this.props.mostRecentMessageId, false);
  }

  render() {
    return (
      <ul className="dropdown-menu center" onClick={this.handleClick}>
        <li>{"Archive"}</li>
        <li>{"Delete"}</li>
        <li>{"Mark as Unread"}</li>
      </ul>
    );
  }
}

DropdownMenu.propTypes = {
  archiveChat: PropTypes.func,
  openModal: PropTypes.func,
  closeDropdownMenu: PropTypes.func,
  setMessageStatus: PropTypes.func,
  chatId: PropTypes.number,
  currentUserId: PropTypes.number,
  mostRecentMessageId: PropTypes.number,
};

export default DropdownMenu;
