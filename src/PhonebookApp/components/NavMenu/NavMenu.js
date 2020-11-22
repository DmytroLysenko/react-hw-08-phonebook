import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { navMenuHide } from "../../redux/contacts/contactsActions";
import { authOperations, authSelectors } from "../../redux/auth";

import styles from "./NavMenu.module.css";

import routes from "../../utils/routes";

const NavMenu = ({ location, navMenuHide, onLogout, isDarkTheme }) => (
  <div className={styles.container} onClick={navMenuHide}>
    <ul className={styles.list}>
      {routes
        .filter((route) => route.navMenu)
        .map((route) => (
          <li
            key={route.label}
            className={styles[`item-${isDarkTheme ? "dark" : "light"}`]}
          >
            <Link
              className={styles[`link-${isDarkTheme ? "dark" : "light"}`]}
              to={{
                pathname: route.path,
                state: { from: location },
              }}
            >
              {route.label}
            </Link>
          </li>
        ))}
      <li
        className={styles[`item-${isDarkTheme ? "dark" : "light"}`]}
        onClick={onLogout}
      >
        Logout
      </li>
    </ul>
  </div>
);
const mapStateToProps = (state) => ({
  isDarkTheme: authSelectors.isDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  navMenuHide: () => dispatch(navMenuHide()),
  onLogout: () => dispatch(authOperations.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);

NavMenu.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  navMenuHide: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  location: PropTypes.object,
};
