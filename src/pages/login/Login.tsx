import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

import { AuthAPi } from "api";
import useApiObservable from "hooks/useApiObservable";
import { useAuthDispatch } from "contexts/AuthContext";

import { Box, Heading, Flex } from "rebass";
import LoginForm from "component/organisms/loginForm/LoginForm";
import LoginInfo from "component/organisms/loginInfo/LoginInfo";

import { LoginResponse, IAPIResponse } from "types";

type LoginProps = {} & RouteComponentProps;

function loginStatus(loginState: IAPIResponse) {
  // 100: 성공 -> dispatch -> 리다이렉트
  // 101 :아이디 틀림 102: 패스워드 틀림 103: 권한없음 error: 문제발생 -> 문구 출력

  const resultStatus = {
    errorMessage: "",
    isLoginSuccess: false,
    username: ""
  };
  const loginSuccess = loginState.success;
  const loginError = loginState.error;
  const loginLoading = loginState.isLoading;

  const loginSuccessResponse = loginSuccess?.response as
    | LoginResponse
    | undefined;

  if (!loginSuccess && !loginError && !loginLoading) {
    return resultStatus;
  }

  if (loginError) {
    resultStatus.errorMessage =
      "문제가 발생했습니다. 잠시후에 다시 시도해 주세요.";
    return resultStatus;
  }

  if (!loginSuccessResponse) {
    return resultStatus;
  }

  switch (loginSuccessResponse.login_code) {
    case "100":
      resultStatus.isLoginSuccess = true;
      resultStatus.errorMessage = "";
      resultStatus.username = loginSuccessResponse.username;
      break;
    case "101":
      resultStatus.errorMessage =
        "계정이 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
      break;
    case "102":
      resultStatus.errorMessage =
        "비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
      break;
    case "103":
      resultStatus.errorMessage =
        "서비스 제공 대상 법인이 아닙니다. 문의하기를 이용해주세요";
      break;
    default:
  }

  return resultStatus;
}

function Login({ location }: LoginProps) {
  const [loginState, subject$] = useApiObservable(AuthAPi.login, false);
  const authDispatch = useAuthDispatch();

  const onSubmit = (e: React.FormEvent) => {
    if (e.currentTarget !== null) {
      subject$.next(e.currentTarget as HTMLFormElement);
    }
  };

  const resultLoginStatus = loginStatus(loginState);
  if (resultLoginStatus.isLoginSuccess) {
    authDispatch({
      type: "LOGIN",
      username: resultLoginStatus.username
    });
    // 리다이렉트
    const { from } = (location.state as { from: { pathname: string } }) || {
      from: { pathname: "/" }
    };
    return <Redirect to={from} />;
    // return <Redirect to={{ ...from, state: { isAuth: true } }} />;
  }

  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Box sx={{ position: "relative", width: "400px" }}>
        <Heading variant="loginLogo" sx={{ mb: 2 }}>
          User Finding Operation
        </Heading>
        <LoginForm
          onSubmit={onSubmit}
          errorMessage={resultLoginStatus.errorMessage}
        ></LoginForm>
        <LoginInfo></LoginInfo>
      </Box>
    </Flex>
  );
}

export default Login;
