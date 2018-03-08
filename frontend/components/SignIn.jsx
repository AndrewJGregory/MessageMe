import React from "react";
import { Link } from "react-router-dom";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", inputType: "password" };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.toggleInputType = this.toggleInputType.bind(this);
  }

  componentDidMount() {
    const validPaths = ["signin", "signup"];
    if (!validPaths.includes(this.props.match.params.category)) {
      console.log("in here");
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
          <div className="form-container">
            <form onSubmit={this.submitForm} className="signin-form center">
              <input
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
                type={this.state.inputType}
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
