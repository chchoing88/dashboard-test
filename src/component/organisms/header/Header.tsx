import React from "react";
import { useAuthState } from "contexts/AuthContext";

import { Flex, Box, Text } from "rebass";
import Logo from "component/atoms/logo/Logo";
import NaviGroup from "component/molecules/naviGroup/NaviGroup";
import HeadMenu from "component/molecules/headMenu/HeadMenu";

import { headerStyle, wrapHeaderStyle } from "./Header.styled";

function Header() {
  const authState = useAuthState();
  return (
    <Box sx={wrapHeaderStyle}>
      <Flex sx={headerStyle}>
        <Logo></Logo>
        <NaviGroup></NaviGroup>
        <Box mx="auto" />
        <Flex sx={{ alignItems: "center" }}>
          <Text sx={{ fontSize: 1, color: "#8d91a0" }}>
            {authState.username}
          </Text>
        </Flex>
        <Box>
          <HeadMenu></HeadMenu>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
