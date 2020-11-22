import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

import styles from "./Button.module.css";

const Button = ({
  text,
  type = "button",
  disabled = false,
  onClick = null,
  isDarkTheme,
  linkTo = null,
}) =>
  linkTo ? (
    <Link
      to={linkTo}
      className={styles[`link-${isDarkTheme ? "dark" : "light"}`]}
    >
      {text}
    </Link>
  ) : (
    <button
      className={styles[`btn-${isDarkTheme ? "dark" : "light"}`]}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );

const mapStateToProps = (state) => ({
  isDarkTheme: authSelectors.isDarkTheme(state),
});

export default connect(mapStateToProps)(Button);

Button.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  linkTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
