import { createSelector } from "@reduxjs/toolkit";

const contacts = (state) => state.contacts.items;
const contactsCount = (state) => state.contacts.items.length;
const message = (state) => state.contacts.message;
const filter = (state) => state.contacts.filter;
const isLoading = (state) => state.contacts.isLoading;
const isNavMenu = (state) => state.contacts.isNavMenu;
const error = (state) => state.contacts.error;
const contactById = (state, id) =>
  state.contacts.items.find((item) => item.id === id);

const contactsByFilter = createSelector(
  contacts,
  filter,
  (contacts, keyword) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
);

const contactsIdsByFilter = createSelector(contactsByFilter, (contacts) =>
  contacts.map((contact) => contact.id)
);

export default {
  contacts,
  contactsCount,
  message,
  filter,
  contactById,
  isLoading,
  isNavMenu,
  error,
  contactsByFilter,
  contactsIdsByFilter,
};
