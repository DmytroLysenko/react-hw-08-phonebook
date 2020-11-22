import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contacts from "./contacts/contactsReducers";
import { authReducers } from "./auth";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isDarkTheme", "isLanguageUA"],
};

const store = configureStore({
  reducer: {
    contacts,
    auth: persistReducer(persistConfig, authReducers),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ["rehydrate", "register"],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
