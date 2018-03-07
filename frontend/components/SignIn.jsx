import React from "react";
import { Link } from "react-router-dom";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateField(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.submitForm(this.state).then(() => {
      this.props.history.push("/messages");
    });
  }

  render() {
    let otherFormText, otherFormPath;
    if (this.props.buttonText === "sign in") {
      otherFormText = "Don't have an account?";
      otherFormPath = "signup";
    } else {
      otherFormText = "Already have an account?";
      otherFormPath = "signin";
    }

    return (
      <main className="session-main center">
        <div className="image-and-form-container center">
          <i className="fa fa-bolt" />
          <h3 className="message-me-header">MessageMe</h3>
          <div className="form-container">
            <form onSubmit={this.submitForm} className="signin-form center">
              <input
                type="text"
                placeholder="Username"
                onChange={this.updateField("username")}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.updateField("password")}
              />
              <button className="clickable">{this.props.buttonText}</button>
              <Link to={otherFormPath}>{otherFormText}</Link>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
