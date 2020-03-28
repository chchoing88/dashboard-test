import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModalContextProvider } from "contexts/ModalContext";
import { AuthContextProvider } from "contexts/AuthContext";

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AuthContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
