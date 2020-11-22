import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import { authOperations, authSelectors } from "../../redux/auth";

import styles from "./signup.module.css";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      ...this.state,
    };
    if (this.isUserValid(user)) {
      this.props.signup(user);
    }
    this.reset();
  };

  isUserValid = ({ name, email, password }) => {
    if (!name || !email || !password) {
      return false;
    }
    return true;
  };

  reset = () => this.setState({ name: "", email: "", password: "" });

  render() {
    const { name, email, password } = this.state;
    const { isLoading, isDarkTheme } = this.props;
    const isDisabled = !(name && email && password);
    return (
      <div className={styles[`container-${isDarkTheme ? "dark" : "light"}`]}>
        {isLoading && <Loader />}
        <Title title="Signup" />
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.formContainet}>
            <input
              className={styles[`input-${isDarkTheme ? "dark" : "light"}`]}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
            <input
              className={styles[`input-${isDarkTheme ? "dark" : "light"}`]}
              type="email"
              name="email"
              placeholder="Email"
              // autoComplete="off"
              value={email}
              onChange={this.handleChange}
            />
            <input
              className={styles[`input-${isDarkTheme ? "dark" : "light"}`]}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.btnContainer}>
            <Button text="Submit" type="submit" disabled={isDisabled} />
          </div>
        </form>
        <p className={styles.back}>
          Have a problem?{" "}
          <Link
            className={styles[`link-${isDarkTheme ? "dark" : "light"}`]}
            to="/"
          >
            Go Back
          </Link>
        </p>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: authSelectors.isLoading(state),
  isDarkTheme: authSelectors.isDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(authOperations.signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

Signup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
};
