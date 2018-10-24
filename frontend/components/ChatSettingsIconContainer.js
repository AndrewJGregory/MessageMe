import { connect } from "react-redux";
import ChatSettingsIcon from "./ChatSettingsIcon";
import { setSelectedUserId, openDropdownMenu } from "../actions/ui";

const mapStateToProps = (state, ownProps) => {
  const { selectedUserId, isDropdownMenuOpen } = state.ui;
  return {
    selectedUserId,
    isDropdownMenuOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedUserId: id => dispatch(setSelectedUserId(id)),
    openDropdownMenu: () => dispatch(openDropdownMenu()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatSettingsIcon);