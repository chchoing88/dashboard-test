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
import { ThemeProvider } from "emotion-theming";

import Header from "component/organisms/header/Header";
import Home from "pages/home/Home";

import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle}></Global>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
