import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./PhonebookApp/redux/store";
import "./index.css";

import PhonebookApp from "./PhonebookApp/PhonebookApp";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PhonebookApp />
      </PersistGate>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
