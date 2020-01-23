import React from "react";
import useNavi from "hooks/useNavi";

import { INaviItem } from "@types";

import { Flex } from "rebass";
import Navi from "component/atoms/navi/Navi";

import { naviGroupStyle } from "./NaviGroup.styled";

function NaviGroup() {
  const [naviListState, onNaviClick] = useNavi();

  return (
    <Flex sx={naviGroupStyle}>
      {naviListState.map((naviItem: INaviItem) => (
        <Navi
          key={naviItem.id}
          naviItem={naviItem}
          onClick={onNaviClick}
        ></Navi>
      ))}
    </Flex>
  );
}

NaviGroup.defaultProps = {
  naviList: []
};

export default NaviGroup;
