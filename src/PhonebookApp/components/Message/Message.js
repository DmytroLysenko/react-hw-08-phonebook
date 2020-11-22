import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { messageClose } from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import styles from "./Message.module.css";

class Message extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    messageClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    setTimeout(() => this.props.messageClose(), 2000);
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.message}>{this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: contactsSelectors.message(state),
});

const mapDispatchToProps = {
  messageClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
