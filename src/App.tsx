import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
  // withRouter
} from "react-router-dom";
// import { Global } from "@emotion/core"; // rebass 와 함께 쓸때 JSX 의 css props type 충돌.
// import { AuthAPi } from "api";
// import useApiObservable from "hooks/useApiObservable";
import { useModalState } from "contexts/ModalContext";
import PrivateRoute from "component/common/privateRoute/PrivateRoute";
import { ThemeProvider } from "emotion-theming";

import Modal from "react-modal";
import ModalContents from "component/organisms/modalContents/ModalContents";
import Home from "pages/home/Home";
import Analysis from "pages/analysis/Analysis";
import CategoryTag from "pages/categoryTag/CategoryTag";
import Login from "pages/login/Login";

// import { CheckResponse } from "types";

import theme from "theme";
import "assets/reset.css";

Modal.setAppElement("#root");
(Modal.defaultStyles.overlay as React.CSSProperties) = {
  backgroundColor: "rgba(44,45,54,.4)",
  display: "flex",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
  alignItems: "center",
  justifyContent: "center"
};
(Modal.defaultStyles.content as React.CSSProperties) = {
  position: "relative",
  minWidth: "400px",
  padding: "54px 45px 40px",
  borderRadius: "10px",
  textAlign: "center",
  backgroundColor: "#fff",
  outline: "none"
};

function App() {
  const modalState = useModalState();
  // const authDispatch = useAuthDispatch();

  // const [checkState, subject$] = useApiObservable(AuthAPi.check, false);
  // useEffect(() => {
  //   subject$.next();
  // }, [subject$]);

  // const loginCheckSuccess = checkState.success;
  // const loginCheckError = checkState.error;
  // const loginCheckLoading = checkState.isLoading;

  // if (!loginCheckSuccess && !loginCheckError && !loginCheckLoading) return null;

  // const loginCheckResponse = (loginCheckSuccess?.response ||
  //   false) as CheckResponse;

  // if (loginCheckResponse) {
  //   authDispatch({ type: "LOGIN_CHECK", username: "merlin.ho", isAuth: true });
  // }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            // isLoginCheck={loginCheckResponse}
          />
          <PrivateRoute
            path="/analysis"
            component={Analysis}
            // isLoginCheck={loginCheckResponse}
          />
          <PrivateRoute
            path="/tag"
            component={CategoryTag}
            // isLoginCheck={loginCheckResponse}
          />
          <Route
            path="/login"
            render={({ ...rest }) => {
              return <Login {...rest}></Login>;
            }}
          />
          <Route path="*" render={() => <Redirect to="/" />} exact />
        </Switch>
        <Modal isOpen={modalState.isModalOpen}>
          <ModalContents type={modalState.modalType}></ModalContents>
        </Modal>
      </Router>
    </ThemeProvider>
  );
}

export default App;
