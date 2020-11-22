import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { authActions, authSelectors } from "../../redux/auth";

import Title from "../../components/Title/Title";
import Footer from "../../components/Footer/Footer";
import Toggler from "../../components/Toggler/Toggler";
import Button from "../../components/Button/Button";

import styles from "./UserSettings.module.css";

class UserSettings extends React.Component {
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push("/");
  };

  handleToggleTheme = () => {
    this.props.toggleTheme();
  };

  handleToggleLanguage = () => {
    this.props.toggleLanguage();
  };

  render() {
    const { isDarkTheme, isLanguageUA } = this.props;
    return (
      <>
        <Title title="Settings" />
        <ul className={styles[`list-${isDarkTheme ? "dark" : "light"}`]}>
          <li className={styles.item}>
            <span>Theme</span>
            <Toggler
              settings={{ one: "🌜", two: "🌞" }}
              onToggle={this.handleToggleTheme}
              position={isDarkTheme}
            />
          </li>
          <li className={styles.item}>
            <span>Language</span>
            <Toggler
              settings={{ one: "🇺🇦", two: "🇬🇧" }}
              onToggle={this.handleToggleLanguage}
              position={isLanguageUA}
            />
          </li>
        </ul>
        <div className={styles.btnContainer}>
          <Button text="Go Back" onClick={this.handleGoBack} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isDarkTheme: authSelectors.isDarkTheme(state),
  isLanguageUA: authSelectors.isLanguageUA(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(authActions.toggleTheme()),
  toggleLanguage: () => dispatch(authActions.toggleLanguage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);

UserSettings.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  isLanguageUA: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};
