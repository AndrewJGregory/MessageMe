import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        You're logged in as {this.props.username}
        <button className="sign-out-btn clickable" onClick={this.props.signOut}>
          Sign Out
        </button>
        <div className="under-construction-info">
          <p className="other-text">
            This is currently under construction. While you're here, check out
            what else I've done:
          </p>
          <ul className="links">
            <li>
              <a href="https://www.linkedin.com/in/andrewjgregoryajg/">
                <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="http://www.andrewjgregoryajg.com">
                <i className="fa fa-2x fa-globe" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://github.com/AndrewJGregory/">
                <i className="fa fa-2x fa-github" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div className="under-construction-img" />
      </main>
    );
  }
}
