import { createAction } from "@reduxjs/toolkit";

const signupRequest = createAction("signup/request");
const signupSuccess = createAction("signup/success");
const signupError = createAction("signup/error");

const loginRequest = createAction("login/request");
const loginSuccess = createAction("login/success");
const loginError = createAction("login/error");

const logoutRequest = createAction("logout/request");
const logoutSuccess = createAction("logout/success");
const logoutError = createAction("logout/error");

const getUserRequest = createAction("user/request");
const getUserSuccess = createAction("user/success");
const getUserError = createAction("user/error");

const toggleTheme = createAction("theme/toggle");
const toggleLanguage = createAction("language/toggle");

export default {
  signupRequest,
  signupSuccess,
  signupError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
  toggleTheme,
  toggleLanguage,
};
