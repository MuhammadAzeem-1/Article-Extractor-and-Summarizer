import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Redux Provider
  <Provider store={store}>
    <App />
  </Provider>
);
