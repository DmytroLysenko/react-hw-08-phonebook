import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { authSelectors, authOperations } from "../../redux/auth";

import Title from "../Title/Title";
import Button from "../Button/Button";

import styles from "./HomeWithAuth.module.css";

const HomeWithAuth = ({ userName, logout }) => (
  <div className={styles.container}>
    <Title title="Welcome!" />
    <p className={styles.name}>{userName}</p>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Button linkTo="/phonebook" text="Phonebook" />
      </li>
      <li className={styles.item}>
        <Button linkTo="/phonebook/profile" text="Profile" />
      </li>
      <li className={styles.item}>
        <Button linkTo="/phonebook/settings" text="Settings" />
      </li>
      <li className={styles.item}>
        <Button linkTo="/about" text="About" />
      </li>
    </ul>
    <span className={styles.logout} onClick={logout}></span>
  </div>
);

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  logout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeWithAuth);

HomeWithAuth.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func.isRequired,
};
