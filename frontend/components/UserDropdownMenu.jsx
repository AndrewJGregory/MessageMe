import PropTypes from "prop-types";
import React from "react";

class UserDropdownMenu extends React.Component {
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
    this.props.setMessageStatus(this.props.mostRecentMessageStatusId, false);
  }

  render() {
    const markAsUnread =
      this.props.mostRecentMessageStatusId > 0 ? (
        <li>{"Mark as Unread"}</li>
      ) : null;
    return (
      <ul className="dropdown-menu" onClick={this.handleClick}>
        <li>{"Archive"}</li>
        <li>{"Delete"}</li>
        {markAsUnread}
      </ul>
    );
  }
}

UserDropdownMenu.propTypes = {
  archiveChat: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeDropdownMenu: PropTypes.func.isRequired,
  setMessageStatus: PropTypes.func.isRequired,
  chatId: PropTypes.number.isRequired,
  currentUserId: PropTypes.number.isRequired,
  mostRecentMessageStatusId: PropTypes.number.isRequired,
};

export default UserDropdownMenu;
