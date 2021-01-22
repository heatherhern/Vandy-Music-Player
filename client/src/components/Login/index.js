import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import ProfileLogo from "../Login/profile.png";
import "./style.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loggedIn: false,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  login = (event) => {
    // event.preventDefault();
    // removed this and got the screen redirect working //

    Axios.post("/login", {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
      console.log(this.email);
      this.setState({ loggedIn: true })
      window.location.href = "/dashboard";
    }).catch((err) => {
      console.log(err)
    })
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    // Displays message if input field doesn't meet requirements
    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid Email Address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 Characters Required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="headerTitle">
            <h1>Login</h1>
            <div>
              <img src={ProfileLogo} style={{ width: 200, height: 200, position: 'center' }} />
            </div>
          </div>
          <form >
            {/* removed this from the form line 89. no handlesubmit function?  */}
            {/* onSubmit={this.handleSubmit} noValidate */}
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="signIn">
              <Link to={"/dashboard"}>
                <button type="submit" onClick={this.login}>Sign In</button>
              </Link>
              <small>Don't Have an Account?</small>
            </div>
            <div className="login">
              <Link to={"/createaccount"}>
                <small>Sign Up</small>
              </Link>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;