import React from "react";
import {
  BrowserRouter as Router,
  Route
  // Switch,
  // Redirect,
  // withRouter
} from "react-router-dom";
// import { Global } from "@emotion/core"; // rebass 와 함께 쓸때 JSX 의 css props type 충돌.
import { ThemeProvider } from "emotion-theming";
import "assets/reset.css";

import Header from "component/organisms/header/Header";
import Home from "pages/home/Home";

import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
