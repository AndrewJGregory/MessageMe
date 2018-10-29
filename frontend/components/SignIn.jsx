import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", inputType: "password" };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.toggleInputType = this.toggleInputType.bind(this);
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      this.props.clearErrors();
      this.setState({ username: "", password: "" });
    }

    const validPaths = ["signin", "signup"];

    if (!validPaths.includes(nextProps.match.params.category)) {
      this.props.history.push("/signin");
    }
  }

  updateField(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  submitForm(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    delete user["inputType"];
    this.props.submitForm(user);
  }

  toggleInputType(e) {
    e.preventDefault();
    const inputType = this.state.inputType === "password" ? "text" : "password";
    this.setState({ inputType });
  }

  render() {
    let otherFormText, otherFormPath, eyeClass;
    if (this.props.buttonText === "sign in") {
      otherFormText = "Don't have an account?";
      otherFormPath = "signup";
    } else {
      otherFormText = "Already have an account?";
      otherFormPath = "signin";
    }

    eyeClass = this.state.inputType === "password" ? "fa-eye" : "fa-eye-slash";

    return (
      <main className="session-main center">
        <div className="image-and-form-container center">
          <i className="fa fa-bolt" />
          <h3 className="message-me-header">MessageMe</h3>
          <div className="form-container center">
            <h3 className="error">{this.props.errors.username}</h3>
            <h3 className="error">{this.props.errors.password}</h3>
            <h3 className="error">{this.props.errors.credentials}</h3>
            <form onSubmit={this.submitForm} className="signin-form center">
              <input
                value={this.state.username}
                type="text"
                placeholder="Username"
                onChange={this.updateField("username")}
              />
              <div className="eye-icon-container">
                <i
                  onClick={this.toggleInputType}
                  className={`fa ${eyeClass} clickable`}
                />
              </div>
              <input
                value={this.state.password}
                type={this.state.inputType}
                placeholder="Password"
                onChange={this.updateField("password")}
              />
              <button className="clickable">{this.props.buttonText}</button>
              <Link to={otherFormPath}>{otherFormText}</Link>
            </form>
            <button
              className="clickable"
              onClick={() => this.props.loginAsGuest()}
            >
              guest demo
            </button>
          </div>
        </div>
      </main>
    );
  }
}

SignIn.propTypes = {
  currentUser: PropTypes.object,
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  submitForm: PropTypes.func,
  clearErrors: PropTypes.func,
  loginAsGuest: PropTypes.func,
};
