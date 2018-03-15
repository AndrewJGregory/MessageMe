import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query }, () => {
      this.props.fetchUsers(query);
    });
  }

  render() {
    const users = this.props.userResults.map(user => {
      return <li key={user.id}>{user.username}</li>;
    });

    return (
      <div>
        <input
          type="text"
          onChange={this.updateInput}
          value={this.state.query}
          placeholder="Search MessageMe"
        />
        <ul>{users}</ul>
      </div>
    );
  }
}
