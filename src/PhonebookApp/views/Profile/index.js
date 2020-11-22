import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { authSelectors } from "../../redux/auth";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import Title from "../../components/Title/Title";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import styles from "./profile.module.css";

class Profile extends React.Component {
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push("/");
  };

  render() {
    const { avatar, name, email, count, isDarkTheme } = this.props;
    return (
      <>
        <Title title="Profile" />
        <div className={styles[`${isDarkTheme ? "dark" : "light"}`]}>
          <div className={styles.avatar}>
            <img src={avatar} alt={name} />
          </div>
          <p className={styles.name}>
            <strong>Name:</strong> {name}
          </p>
          <p className={styles.email}>
            <strong>Email:</strong> {email}
          </p>
          <p className={styles.count}>
            You {count === 0 ? " don`t have" : `have ${count}`} contacts
          </p>
        </div>
        <div className={styles.btnContainer}>
          <Button text="Go Back" onClick={this.handleGoBack} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  avatar: authSelectors.getUserAvatar(state),
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state),
  count: contactsSelectors.contactsCount(state),
  isDarkTheme: authSelectors.isDarkTheme(state),
});

export default connect(mapStateToProps)(Profile);

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  count: PropTypes.number,
  isDarkTheme: PropTypes.bool.isRequired,
};
