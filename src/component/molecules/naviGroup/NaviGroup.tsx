import React from "react";
import { INaviItem } from "types";
import { Flex } from "rebass";
import Navi from "component/atoms/navi/Navi";
import { naviGroupStyle } from "./NaviGroup.styled";
import { NAVI_INIT_STATE } from "../../../constants";

function NaviGroup() {
  return (
    <Flex as="ul" className="wrap_navi" sx={naviGroupStyle}>
      {NAVI_INIT_STATE.map((naviItem: INaviItem) => (
        <Navi key={naviItem.id} naviItem={naviItem}></Navi>
      ))}
    </Flex>
  );
}

export default NaviGroup;
