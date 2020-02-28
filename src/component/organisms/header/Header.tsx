import React from "react";

import { Flex, Box } from "rebass";
import Logo from "component/atoms/logo/Logo";
import NaviGroup from "component/molecules/naviGroup/NaviGroup";
import HeadMenu from "component/molecules/headMenu/HeadMenu";

import { headerStyle, wrapHeaderStyle } from "./Header.styled";

function Header() {
  return (
    <Box sx={wrapHeaderStyle}>
      <Flex sx={headerStyle}>
        <Logo></Logo>
        <NaviGroup></NaviGroup>
        <Box mx="auto" />
        <Box>
          <HeadMenu></HeadMenu>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
