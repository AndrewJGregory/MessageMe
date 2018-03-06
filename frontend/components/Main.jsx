import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        You're logged in {this.props.username}
        <button onClick={this.props.logout}>Logout</button>
      </main>
    );
  }
}
