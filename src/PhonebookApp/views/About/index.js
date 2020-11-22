import React from "react";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

import styles from "./About.module.css";

class About extends React.Component {
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <Title title="About" />
        <p className={styles.appName}>Personal Phonebook</p>
        <p className={styles.appAbout}>
          After signup, you can collect your contacts in personal Phonebook.
        </p>
        <p className={styles.appTechnologies}>
          App created with{" "}
          <a
            rel="noopener noreferrer"
            className={styles.link}
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
            target="_blank"
          >
            JS
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className={styles.link}
            href="https://ru.reactjs.org/"
            target="_blank"
          >
            React
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
          >
            Redux
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className={styles.link}
            href="https://www.npmjs.com/package/axios"
            target="_blank"
          >
            Axios
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className={styles.link}
            href="https://reactrouter.com/web/guides/quick-start"
            target="_blank"
          >
            React Router
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            className={styles.link}
            href="https://reactrouter.com/web/guides/quick-start"
            target="_blank"
          >
            React Transition Group
          </a>
          , and other technologies.
        </p>
        <div className={styles.author}>
          <p className={styles.authorName}>Created by Lysenko Dmytro</p>
          <ul className={styles.contactsList}>
            <li className={styles.phone}>
              <a className={styles.contactLink} href="tel:+380967550420"><span></span></a>
            </li>
            <li className={styles.email}>
              <a
                className={styles.contactLink}
                href="mailto:kyxap.ua@gmail.com"
              ><span></span></a>
            </li>
          </ul>
          <ul className={styles.socialList}>
            <li className={styles.facebook}>
              <a
                rel="noopener noreferrer"
                className={styles.contactLink}
                href="https://www.facebook.com/dmitriu.lysenko/"
                target="_blank"
              ><span></span></a>
            </li>
            <li className={styles.linkedin}>
              <a
                rel="noopener noreferrer"
                className={styles.contactLink}
                href="http://www.linkedin.com/in/dmytro-lysenko-014733198"
                target="_blank"
              ><span></span></a>
            </li>
            <li className={styles.github}>
              <a
                rel="noopener noreferrer"
                className={styles.contactLink}
                href="https://github.com/DmytroLysenko/react-hw-08-phonebook"
                target="_blank"
              ><span></span></a>
            </li>
          </ul>
        </div>
        <div className={styles.btnContainer}>
          <Button text="Go Back" onClick={this.handleGoBack} />
        </div>
        <p className={styles.TM}>
          <a className={styles.linkTM} href="https://goit.ua/">
            GoIT
          </a>
          , 2020
        </p>
      </>
    );
  }
}

export default About;
