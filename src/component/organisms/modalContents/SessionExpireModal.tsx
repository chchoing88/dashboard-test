import React from "react";
import { useModalDispatch } from "contexts/ModalContext";
import { useAuthDispatch } from "contexts/AuthContext";

import { Box, Text, Button } from "rebass";
import { RouteComponentProps } from "react-router-dom";

type SessionExpireModalProps = {} & RouteComponentProps;

function SessionExpireModal({ history }: SessionExpireModalProps) {
  const modalDispatch = useModalDispatch();
  const authDispatch = useAuthDispatch();
  const onClick = () => {
    modalDispatch({ type: "CLOSE", modalType: "DEFAULT" });
    // return <Redirect to={"/login"} />;
    authDispatch({ type: "LOGOUT" });
    return history.push("/login");
  };
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Text sx={{ fontSize: 3 }}>세션이 만료 되었습니다.</Text>
        <Text sx={{ fontSize: 3 }}>다시 로그인해 주세요.</Text>
      </Box>
      <Button variant="normal" sx={{ width: "110px" }} onClick={onClick}>
        확인
      </Button>
    </Box>
  );
}

export default SessionExpireModal;
