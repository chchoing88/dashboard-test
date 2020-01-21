import React from "react";
import {
  BrowserRouter as Router,
  Route
  // Switch,
  // Redirect,
  // withRouter
} from "react-router-dom";
import { Global } from "@emotion/core";
import { GlobalStyle } from "./Global.styled";

import Header from "component/organisms/header/Header";
import Home from "pages/home/Home";

function App() {
  return (
    <>
      <Global styles={GlobalStyle}></Global>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
