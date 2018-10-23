import { connect } from "react-redux";
import Modal from "./Modal";

const mapStateToProps = state => {
  return {
    isModalOpen: state.ui.isModalOpen,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Modal);
