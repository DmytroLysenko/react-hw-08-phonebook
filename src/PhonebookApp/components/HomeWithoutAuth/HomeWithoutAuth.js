import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { authSelectors } from "../../redux/auth";

import Title from "../Title/Title";

import styles from "./HomeWithoutAuth.module.css";

const HomeWithoutAuth = ({ isDarkTheme }) => (
  <div className={styles.container}>
    <Title title="Phonebook" />
    <p className={styles.afterTitle}>Welcome!</p>
    <ul className={styles.linkList}>
      <li className={styles.linkItem}>
        <Link
          className={styles[`link-${isDarkTheme ? "dark" : "light"}`]}
          to={"/login"}
        >
          Login
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link
          className={styles[`link-${isDarkTheme ? "dark" : "light"}`]}
          to={"/signup"}
        >
          Signup
        </Link>
      </li>
    </ul>
  </div>
);

const mapStatetToProps = (state) => ({
  isDarkTheme: authSelectors.isDarkTheme(state),
});

export default connect(mapStatetToProps)(HomeWithoutAuth);

HomeWithoutAuth.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};
