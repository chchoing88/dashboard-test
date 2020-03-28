import React from "react";
import { Redirect } from "react-router-dom";

import { AuthAPi } from "api";
import useApiObservable from "hooks/useApiObservable";
import { useAuthDispatch } from "contexts/AuthContext";
import { useModalDispatch } from "contexts/ModalContext";

import useMenu from "hooks/useMenu";
import { Button, Box, Text } from "rebass";

import Icon from "component/atoms/icon/Icon";
import MenuLink from "component/atoms/menuLink/MenuLink";

function HeadMenu() {
  const { menuState, onMenuToggle } = useMenu();
  const [logoutState, subject$] = useApiObservable(AuthAPi.logout);

  const authDispatch = useAuthDispatch();
  const modalDispatch = useModalDispatch();

  const logout = (e: React.MouseEvent) => {
    e.preventDefault();
    subject$.next();
  };

  const logoutSuccess = logoutState.success?.status as number | undefined;
  const logoutError = logoutState.error;
  if (logoutSuccess === 200) {
    authDispatch({ type: "LOGOUT" });
    return <Redirect to={"/login"} />;
  }

  if (logoutError?.status === 403) {
    modalDispatch({ type: "OPEN", modalType: "SESSION_EXPIRE" });
  }

  return (
    <Box
      className="menu_more"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Button sx={{ height: "100%", outline: "none" }} onClick={onMenuToggle}>
        <Icon icon="menu"></Icon>
      </Button>

      <Box
        sx={{
          display: menuState.isOpen ? "display" : "none",
          position: "absolute",
          top: "45px",
          right: "10px",
          zIndex: "200",
          padding: "14px 0",
          minWidth: "190px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          boxShadow: "0 0 20px rgba(0,0,0,.2)",
          whiteSpace: "nowrap",
          color: "black",
          textAlign: "left"
        }}
      >
        <MenuLink
          href="https://kakao.agit.in/g/433695/wall/319152716"
          isOutLink={true}
        >
          UFO 업데이트 소식
        </MenuLink>

        <MenuLink href="#none" onClick={logout}>
          로그아웃
        </MenuLink>

        <Box
          sx={{
            position: "relative",
            height: "1px",
            bg: "rgba(0,0,0,0.1)",
            margin: "25px 14px 15px"
          }}
        >
          <Text
            sx={{
              position: "absolute",
              top: "-6px",
              left: "10px",
              padding: "0 3px",
              color: "content",
              fontSize: "12px",
              lineHeight: "12px",
              bg: "clean"
            }}
          >
            서비스 더보기
          </Text>
        </Box>
        <MenuLink href="http://datazoo.devel.kakao.com/" isOutLink={true}>
          Data ZOO
        </MenuLink>
        <MenuLink href="http://atm-web.daumtools.com/" isOutLink={true}>
          ATM
        </MenuLink>
        {/* <MenuLink href="www.naver.com" isOutLink={true}>
          WAY 대시보드
        </MenuLink> */}
      </Box>
    </Box>
  );
}

export default HeadMenu;
