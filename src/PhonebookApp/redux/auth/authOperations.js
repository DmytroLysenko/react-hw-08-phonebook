import authActions from "./authActions";
import { contactsLoad } from "../contacts/contactsOperations";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clear() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const signup = (user) => (dispatch) => {
  dispatch(authActions.signupRequest());
  axios
    .post("/users/signup", user)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.signupSuccess(response.data));
    })
    .catch((err) => dispatch(authActions.signupError(err.message)));
};

const login = (user) => (dispatch) => {
  dispatch(authActions.loginRequest());
  axios
    .post("/users/login", user)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
      dispatch(contactsLoad());
    })
    .catch((err) => dispatch(authActions.loginError(err.message)));
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.clear();
      dispatch(authActions.logoutSuccess());
    })
    .catch((err) => dispatch(authActions.logoutError(err.message)));
};

const getUser = () => (dispatch, getState) => {
  const {
    auth: { token: isAuth },
  } = getState();

  if (!isAuth) {
    return;
  }
  token.set(isAuth);
  dispatch(authActions.getUserRequest());

  axios
    .get("/users/current")
    .then((response) => {
      dispatch(authActions.getUserSuccess(response.data));
      dispatch(contactsLoad());
    })
    .catch((err) => dispatch(authActions.getUserError(err.message)));
};

export default { signup, login, logout, getUser };
