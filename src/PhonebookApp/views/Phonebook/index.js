import React from "react";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import UserMenu from "../../components/UserMenu/UserMenu";
import Title from "../../components/Title/Title";
import ContactAddForm from "../../components/ContactAddForm/ContactAddForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";

import styles from "./phonebook.module.css";

import filterAnimate from "../../utils/animations/filter.module.css";
import titleAppAnimate from "../../utils/animations/titleApp.module.css";
import messageAnimate from "../../utils/animations/message.module.css";
import navMenuAnimate from "../../utils/animations/navMenu.module.css";



const Phonebook = ({
  isNavMenu,
  isLoading,
  isMessage,
  isFilter,
  error,
  location,
}) => (
  <>
    {isLoading && <Loader />}

    <CSSTransition
      in={isNavMenu}
      timeout={500}
      classNames={navMenuAnimate}
      unmountOnExit
    >
      <NavMenu location={location} />
    </CSSTransition>

    <CSSTransition
      in={isMessage}
      timeout={250}
      classNames={messageAnimate}
      unmountOnExit
    >
      <Message />
    </CSSTransition>

    <UserMenu />
    <div className={styles.titlePosition}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={titleAppAnimate}
      >
        <Title title="Phonebook" />
      </CSSTransition>
    </div>
    {error ? (
      <Error />
    ) : (
      <>
        <ContactAddForm />

        <CSSTransition
          in={isFilter}
          timeout={250}
          classNames={filterAnimate}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </>
    )}
    <Footer />
  </>
);

const mapStateToProps = (state) => ({
  isNavMenu: contactsSelectors.isNavMenu(state),
  isLoading: contactsSelectors.isLoading(state),
  isMessage: contactsSelectors.message(state),
  isFilter: contactsSelectors.contactsCount(state) > 1,
  error: contactsSelectors.error(state),
});

export default connect(mapStateToProps)(Phonebook);

Phonebook.propTypes = {
  isNavMenu: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isMessage: PropTypes.bool,
  isFilter: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};
