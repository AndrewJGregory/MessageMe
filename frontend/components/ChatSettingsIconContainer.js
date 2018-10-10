import { connect } from "react-redux";
import ChatSettingsIcon from "./ChatSettingsIcon";
import { setSelectedUserId } from "../actions/ui";

const mapStateToProps = (state, ownProps) => {
  const { selectedUserId } = state.ui;
  return {
    selectedUserId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedUserId: id => dispatch(setSelectedUserId(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatSettingsIcon);
