import React from "react";

import { Flex } from "rebass";
import Logo from "component/atoms/logo/Logo";
import NaviGroup from "component/molecules/naviGroup/NaviGroup";

type HeaderProps = {};

function Header() {
  return (
    <Flex>
      <Logo></Logo>
      <NaviGroup></NaviGroup>
    </Flex>
  );
}

export default Header;
