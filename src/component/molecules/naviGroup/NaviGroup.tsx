import React from "react";
import useNavi from "hooks/useNavi";

import { INaviItem } from "@types";

import { Box } from "rebass";
import Navi from "component/atoms/navi/Navi";

import { naviGroupStyle } from "./NaviGroup.styled";

function NaviGroup() {
  const [naviListState, onNaviClick] = useNavi();

  return (
    <Box sx={naviGroupStyle}>
      {naviListState.map((naviItem: INaviItem) => (
        <Navi
          key={naviItem.id}
          naviItem={naviItem}
          onClick={onNaviClick}
        ></Navi>
      ))}
    </Box>
  );
}

NaviGroup.defaultProps = {
  naviList: []
};

export default NaviGroup;
