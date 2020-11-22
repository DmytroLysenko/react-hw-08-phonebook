import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./authActions";

const INITIAL_USER = {
  name: null,
  email: null,
};

const user = createReducer(INITIAL_USER, {
  [actions.signupSuccess]: (state, action) => action.payload.user,
  [actions.loginSuccess]: (state, action) => action.payload.user,
  [actions.getUserSuccess]: (state, action) => action.payload,
  [actions.logoutSuccess]: (state, action) => INITIAL_USER,
});

const isDarkTheme = createReducer(false, {
  [actions.toggleTheme]: (state) => !state,
});

const isLanguageUA = createReducer(false, {
  [actions.toggleLanguage]: (state) => !state,
});

const token = createReducer(null, {
  [actions.signupSuccess]: (state, action) => action.payload.token,
  [actions.loginSuccess]: (state, action) => action.payload.token,
  [actions.logoutSuccess]: () => null,
});

const loading = createReducer(false, {
  [actions.signupRequest]: () => true,
  [actions.signupError]: () => false,
  [actions.signupSuccess]: () => false,
  [actions.loginRequest]: () => true,
  [actions.loginError]: () => false,
  [actions.loginSuccess]: () => false,
  [actions.getUserRequest]: () => true,
  [actions.getUserError]: () => false,
  [actions.getUserSuccess]: () => false,
  [actions.logoutRequest]: () => true,
  [actions.logoutError]: () => false,
  [actions.logoutSuccess]: () => false,
});

const error = createReducer(null, {
  [actions.signupError]: (state, action) => action.payload,
  [actions.loginError]: (state, action) => action.payload,
  [actions.logoutError]: (state, action) => action.payload,
  [actions.getUserError]: (state, action) => action.payload,
  [actions.signupSuccess]: () => null,
  [actions.loginSuccess]: () => null,
  [actions.getUserSuccess]: () => null,
  [actions.logoutSuccess]: () => null,
});

export default combineReducers({
  user,
  isDarkTheme,
  isLanguageUA,
  token,
  loading,
  error,
});
