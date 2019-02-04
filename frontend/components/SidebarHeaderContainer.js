import SidebarHeader from "./SidebarHeader";
import { connect } from "react-redux";
import { openDropdownMenu } from "../actions/ui";

const mapStateToProps = state => {
  const { dropdownMenuType } = state.ui;
  return { dropdownMenuType };
};

const mapDispatchToProps = dispatch => {
  return {
    openDropdownMenu: type => dispatch(openDropdownMenu(type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidebarHeader);
