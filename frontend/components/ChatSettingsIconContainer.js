import { openDropdownMenu, setSelectedUserId } from "../actions/ui";

import ChatSettingsIcon from "./ChatSettingsIcon";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { selectedUserId, dropdownMenuType } = state.ui;
  return {
    selectedUserId,
    dropdownMenuType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedUserId: id => dispatch(setSelectedUserId(id)),
    openDropdownMenu: type => dispatch(openDropdownMenu(type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatSettingsIcon);
