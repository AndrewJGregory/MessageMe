import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      textAlignment: "",
      shouldUsersBeDisplayed: false
    };
    this.updateInput = this.updateInput.bind(this);
    this.leftAlignText = this.leftAlignText.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query });
  }

  componentDidMount() {
    this.props.fetchUsers("");
  }

  leftAlignText(e) {
    e.preventDefault();
    this.setState({
      textAlignment: "left-text-align",
      shouldUsersBeDisplayed: true
    });
  }

  handleOnBlur(e) {
    e.preventDefault();
    this.setState({ textAlignment: "", shouldUsersBeDisplayed: false });
  }

  render() {
    const regExp = new RegExp(`${this.state.query}`);
    let users = null;
    if (this.state.shouldUsersBeDisplayed) {
      users = this.props.userResults.reduce((users, user) => {
        if (regExp.test(user.username)) {
          users.push(
            <li key={user.id} className="user-search-result clickable">
              {user.username}
            </li>
          );
        }
        return users;
      }, []);
    }

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
            onBlur={this.handleOnBlur}
          />
        </div>
        <ul className="user-search-results">{users}</ul>
      </div>
    );
  }
}
