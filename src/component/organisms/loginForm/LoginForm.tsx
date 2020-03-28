import React, { useRef } from "react";
import useLoginForm from "hooks/useLoginForm";

import { Box, Text, Button } from "rebass";
import { Label } from "@rebass/forms";

import CheckBox from "component/atoms/checkBox/CheckBox";
import LoginInput from "component/molecules/loginInput/LoginInput";

type LoginFormProps = {
  onSubmit: (e: React.FormEvent) => void;
  errorMessage: string;
};

function LoginForm({ onSubmit, errorMessage }: LoginFormProps) {
  const {
    username,
    password,
    isLoginKeep,
    setUserName,
    setPassword,
    setLoginKeep,
    validMessage,
    idValidation,
    passwordValidation
  } = useLoginForm();
  const $elemPasswordInput = useRef<HTMLInputElement>(null);

  return (
    <Box
      as="form"
      onSubmit={e => {
        e.preventDefault();
        idValidation() && passwordValidation() && onSubmit(e);
      }}
    >
      <LoginInput
        id="username"
        name="username"
        autoComplete="username"
        value={username}
        isTyping={!!username}
        onChange={e => setUserName(e.target.value)}
        onDelete={e => {
          e.preventDefault();
          setUserName("");
        }}
        placeholder="카카오계정"
      ></LoginInput>
      <LoginInput
        type="password"
        id="password"
        name="password"
        autoComplete="current-password"
        ref={$elemPasswordInput}
        isTyping={!!password}
        onChange={e => setPassword(e.target.value)}
        onDelete={e => {
          e.preventDefault();
          if ($elemPasswordInput.current) {
            $elemPasswordInput.current.value = "";
          }
          setPassword("");
        }}
        placeholder="비밀번호"
        css={{ marginTop: "6px", textSecurity: "disc" }}
      ></LoginInput>
      <Box sx={{ position: "relative", mt: 2 }}>
        <Label sx={{ alignItems: "center" }}>
          <CheckBox
            id="isKeep"
            name="isKeep"
            onChange={e => setLoginKeep(!isLoginKeep)}
            defaultChecked={isLoginKeep}
          ></CheckBox>
          <Text sx={{ ml: 1 }}>로그인 상태 유지</Text>
        </Label>
        {(errorMessage || validMessage) && (
          <Text
            sx={{
              position: "absolute",
              bottom: "-27px",
              color: "#ee1f1f",
              fontSize: 0
            }}
          >
            {errorMessage || validMessage}
          </Text>
        )}
      </Box>
      <Box sx={{ mt: 6 }}>
        <Button type="submit" variant="login">
          로그인
        </Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
