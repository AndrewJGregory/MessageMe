import { connect } from "react-redux";
import Search from "./Search";
import { fetchUsers } from "../actions/search";

const mapStateToProps = state => {
  return {
    userResults: Object.values(state.search.users)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: query => dispatch(fetchUsers(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
