import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../../redux/contacts/contactsActions";
import selectors from "../../redux/contacts/contactsSelectors";
import { authSelectors } from "../../redux/auth";

import styles from "./Filter.module.css";

const Filter = ({ filter, onFilter, isDarkTheme }) => (
  <div className={styles.container}>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilter}
      autoComplete="off"
      placeholder="Find contact by name"
      className={styles[`input-${isDarkTheme ? "dark" : "light"}`]}
    />
  </div>
);

const mapStateToProps = (state) => ({
  filter: selectors.filter(state),
  isDarkTheme: authSelectors.isDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(actions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};
