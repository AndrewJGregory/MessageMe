import SidebarHeader from "./SidebarHeader";
import { connect } from "react-redux";
import { openDropdownMenu } from "../actions/ui";

const mapDispatchToProps = dispatch => {
  return {
    openDropdownMenu: type => dispatch(openDropdownMenu(type)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(SidebarHeader);
