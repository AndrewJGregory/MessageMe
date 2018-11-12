import PropTypes from "prop-types";
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
      <ul className="dropdown-menu center">
        <li onClick={this.handleArchive}>Archive</li>
        <li
          onClick={e => {
            e.stopPropagation();
            this.props.openModal();
            this.props.closeDropdownMenu();
          }}
        >
          {"Delete"}
        </li>
      </ul>
    );
  }
}

DropdownMenu.propTypes = {
  archiveChat: PropTypes.func,
  openModal: PropTypes.func,
  closeDropdownMenu: PropTypes.func,
  chatId: PropTypes.number,
  currentUserId: PropTypes.number,
};

export default DropdownMenu;
