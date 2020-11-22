import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { navMenuShow } from "../../redux/contacts/contactsActions";

import styles from "./UserMenu.module.css";

const UserMenu = ({
  avatar,
  name,
  openNavMenu,
  isAuthenticated,
  isDarkTheme,
}) => (
  <div className={styles[`container-${isDarkTheme ? "dark" : "light"}`]}>
    {isAuthenticated ? (
      <>
        <img className={styles.avatar} src={avatar} alt={name} width="32" />
        <span className={styles.name}>{name}</span>
        <span className={styles.menu} onClick={openNavMenu}></span>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  avatar: authSelectors.getUserAvatar(state),
  name: authSelectors.getUserName(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
  isDarkTheme: authSelectors.isDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  openNavMenu: () => dispatch(navMenuShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

UserMenu.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isAuthenticated: PropTypes.string,
  isDarkTheme: PropTypes.bool.isRequired,
  openNavMenu: PropTypes.func.isRequired,
};
