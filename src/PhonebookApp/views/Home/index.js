import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

import HomeWithAuth from "../../components/HomeWithAuth/HomeWithAuth";
import HomeWithoutAuth from "../../components/HomeWithoutAuth/HomeWithoutAuth";
import Footer from "../../components/Footer/Footer";

const Home = ({ isAuthenticated }) => (
  <>
    {isAuthenticated ? <HomeWithAuth /> : <HomeWithoutAuth />}
    <Footer />
  </>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Home);

Home.propTypes = {
  isAuthenticated: PropTypes.string,
};
