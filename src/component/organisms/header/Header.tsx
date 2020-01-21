import React from "react";

import { Flex, Box } from "rebass";
import Logo from "component/atoms/logo/Logo";
import NaviGroup from "component/molecules/naviGroup/NaviGroup";

import { headerStyle, wrapHeaderStyle } from "./Header.styled";

function Header() {
  return (
    <Flex sx={wrapHeaderStyle}>
      <Flex sx={headerStyle}>
        <Logo></Logo>
        <Box mx="auto" />
        <NaviGroup></NaviGroup>
      </Flex>
    </Flex>
  );
}

export default Header;
