import React from "react";
import PropTypes from "prop-types";

import styles from "./Toggler.module.css";

class Toggler extends React.Component {
  render() {
    const {
      settings: { one = null, two = null },
      onToggle,
      position,
    } = this.props;

    return (
      <div className={styles.container} onClick={onToggle}>
        <div className={styles.choiceItem}>
          <span>{one}</span>
        </div>
        <div className={styles.choiceItem}>
          <span>{two}</span>
        </div>
        <div className={position ? styles.thumbRight : styles.thumbLeft}></div>
      </div>
    );
  }
}


export default Toggler;

Toggler.propTypes = {
  settings: PropTypes.object,
  onToggle: PropTypes.func.isRequired,
  position: PropTypes.bool.isRequired,
};
