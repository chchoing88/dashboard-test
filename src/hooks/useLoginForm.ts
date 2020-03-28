import { useState, useCallback } from "react";

function useLoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginKeep, setLoginKeep] = useState(false);
  const [validMessage, setValidMessage] = useState("");

  const idValidation = useCallback(() => {
    if (username === "") {
      setValidMessage("카카오 계정을 입력해주세요.");
      return false;
    }

    return true;
  }, [username]);

  const passwordValidation = useCallback(() => {
    if (password === "") {
      setValidMessage("비밀번호를 입력해주세요.");
      return false;
    }
    return true;
  }, [password]);

  return {
    username,
    setUserName,
    password,
    setPassword,
    isLoginKeep,
    setLoginKeep,
    idValidation,
    passwordValidation,
    validMessage,
    setValidMessage
  };
}

export default useLoginForm;
