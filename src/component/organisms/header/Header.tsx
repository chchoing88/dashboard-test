import React from "react";

import { Flex, Box } from "rebass";
import Logo from "component/atoms/logo/Logo";
import NaviGroup from "component/molecules/naviGroup/NaviGroup";

import { headerStyle, wrapHeaderStyle } from "./Header.styled";

function Header() {
  return (
    <Box sx={wrapHeaderStyle}>
      <Flex sx={headerStyle}>
        <Logo></Logo>
        <Box mx="auto" />
        <NaviGroup></NaviGroup>
      </Flex>
    </Box>
  );
}

export default Header;
