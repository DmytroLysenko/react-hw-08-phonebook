import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import selectors from "../../redux/contacts/contactsSelectors";
import { errorReset } from "../../redux/contacts/contactsActions";

import Button from "../Button/Button";

import styles from "./Error.module.css";

const Error = ({ message, errorReset }) => {
  return (
    <div className={styles.container}>
      <p>Oops... something went wrong :(</p>
      <p>
        <strong>{message}</strong>
      </p>
      <div className={styles.btnContainer}>
        <Button text="Ok..." onClick={errorReset} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: selectors.error(state),
});

const mapDispatchToProps = {
  errorReset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);

Error.defaultProps = {
  message: "Unknown message",
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  errorReset: PropTypes.func.isRequired,
};
