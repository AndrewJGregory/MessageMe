import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", textAlignment: "" };
    this.updateInput = this.updateInput.bind(this);
    this.leftAlignText = this.leftAlignText.bind(this);
    this.centerAlignText = this.centerAlignText.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query }, () => {
      this.props.fetchUsers(query);
    });
  }

  leftAlignText(e) {
    e.preventDefault();
    this.setState({ textAlignment: "left-text-align" });
  }

  centerAlignText(e) {
    e.preventDefault();
    this.setState({ textAlignment: "" });
  }

  render() {
    const users = this.props.userResults.map(user => {
      return (
        <li key={user.id} className="user-search-result clickable">
          {user.username}
        </li>
      );
    });

    return (
      <div className="search">
        <div className="user-search-input-container">
          <i className="fa fa-search" />
          <input
            type="text"
            onChange={this.updateInput}
            value={this.state.query}
            placeholder="Search MessageMe"
            className="user-search-input"
            id={`${this.state.textAlignment}`}
            onFocus={this.leftAlignText}
            onBlur={this.centerAlignText}
          />
        </div>
        <ul className="user-search-results">{users}</ul>
      </div>
    );
  }
}
