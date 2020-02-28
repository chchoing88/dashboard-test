import React from "react";
import useMenu from "hooks/useMenu";
import { Button, Box, Text } from "rebass";

import Icon from "component/atoms/icon/Icon";
import MenuLink from "component/atoms/menuLink/MenuLink";

// type HeadMenuProps = {};

function HeadMenu() {
  const { menuState, onMenuToggle } = useMenu();

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
        <MenuLink href="www.naver.com" isOutLink={true}>
          아지트 바로가기
        </MenuLink>
        <MenuLink href="" isOutLink={true}>
          UFO 업데이트 소식
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
        <MenuLink href="www.naver.com" isOutLink={true}>
          Data ZOO
        </MenuLink>
        <MenuLink href="www.naver.com" isOutLink={true}>
          ATM
        </MenuLink>
        <MenuLink href="www.naver.com" isOutLink={true}>
          WAY 대시보드
        </MenuLink>
      </Box>
    </Box>
  );
}

export default HeadMenu;
