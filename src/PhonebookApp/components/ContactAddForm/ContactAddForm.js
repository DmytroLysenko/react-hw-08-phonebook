import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { messageShow } from "../../redux/contacts/contactsActions";
import { contactAdd } from "../../redux/contacts/contactsOperations";
import selectors from "../../redux/contacts/contactsSelectors";
import { authSelectors } from "../../redux/auth";

import Button from "../Button/Button";

import LOGS from "../../utils/LOGS";

import styles from "./ContactAddForm.module.css";

class ContactForm extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    isMessage: PropTypes.bool.isRequired,
    isDarkTheme: PropTypes.bool.isRequired,
    contactAdd: PropTypes.func.isRequired,
    messageShow: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      name: name.split(" ").join(" "),
      number,
    };

    if (this.isContactPassed(contact)) {
      this.props.contactAdd(contact);
    }
    this.reset();
  };

  isContactPassed = (contact) => {
    const namesOfContacts = this.props.contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    const name = contact.name.toLowerCase();
    const passed = !namesOfContacts.includes(name);

    if (!passed) {
      this.props.messageShow(`${contact.name} ${LOGS.isPresent}`);
    }
    return passed;
  };

  reset = () =>
    this.setState({
      name: "",
      number: "",
    });

  render() {
    const { name, number } = this.state;
    const { isMessage, isDarkTheme } = this.props;
    const isDisabled = !name || !number || isMessage;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles[`input-${isDarkTheme ? "dark" : "light"}`]}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles[`input-${isDarkTheme ? "dark" : "light"}`]}
            type="phone"
            name="number"
            value={number}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </label>
        <Button text="Add Contact" type="submit" disabled={isDisabled} />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: selectors.contacts(state),
  isMessage: Boolean(selectors.message(state)),
  isDarkTheme: authSelectors.isDarkTheme(state),
});

const mapDispatchToProps = {
  contactAdd,
  messageShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
