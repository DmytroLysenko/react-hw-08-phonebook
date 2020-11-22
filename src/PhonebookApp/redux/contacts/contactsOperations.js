import axios from "axios";

import * as action from "./contactsActions";

const BASE_URL = "https://goit-phonebook-api.herokuapp.com";

const contactsLoad = () => (dispatch) => {
  dispatch(action.contactsLoadRequest());
  axios
    .get(`${BASE_URL}/contacts`)
    .then(({ data }) => dispatch(action.contactsLoadSuccess(data)))
    .catch((err) => dispatch(action.contactsLoadError(err.message)));
};

const contactAdd = (contact) => (dispatch) => {
  dispatch(action.contactAddRequest());
  axios
    .post(`${BASE_URL}/contacts`, contact)
    .then(({ data }) => dispatch(action.contactAddSuccess(data)))
    .catch((err) => dispatch(action.contactAddError(err.message)));
};

const contactRemove = (id) => (dispatch) => {
  dispatch(action.contactRemoveRequest());
  axios
    .delete(`${BASE_URL}/contacts/${id}`)
    .then(() => dispatch(action.contactRemoveSuccess(id)))
    .catch((err) => dispatch(action.contactRemoveError(err.message)));
};


export { contactsLoad, contactAdd, contactRemove };
