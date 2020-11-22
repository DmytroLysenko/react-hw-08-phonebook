import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";

import { authOperations, authSelectors } from "./redux/auth";

import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import routes from "./utils/routes";

import styles from "./PhonebookApp.module.css";

class PhonebookApp extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { isDarkTheme } = this.props;
    return (
      <div className={styles[`container-${isDarkTheme ? "dark" : "light"}`]}>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              )
            )}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isDarkTheme: authSelectors.isDarkTheme(state),
});

export default connect(mapStateToProps, { getUser: authOperations.getUser })(
  PhonebookApp
);

PhonebookApp.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};
