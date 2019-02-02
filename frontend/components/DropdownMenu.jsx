import PropTypes from "prop-types";
import React from "react";

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleArchive = this.handleArchive.bind(this);
    this.closeDropdownMenu = this.props.closeDropdownMenu.bind(this);
  }

  handleArchive(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props
      .archiveChat(this.props.chatId, this.props.currentUserId, true)
      .then(this.closeDropdownMenu);
  }

  render() {
    return (
      <ul className="dropdown-menu center">
        <li onClick={this.handleArchive}>Archive</li>
        <li
          onClick={e => {
            e.stopPropagation();
            this.props.openModal();
            this.closeDropdownMenu();
          }}
        >
          {"Delete"}
        </li>
        <li
          onClick={e => {
            e.stopPropagation();
            this.props.setMessageStatus(this.props.mostRecentMessageId, false);
            this.closeDropdownMenu();
          }}
        >
          {"Mark as Unread"}
        </li>
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
