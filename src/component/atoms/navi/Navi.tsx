import React from "react";
import { INaviItem, NaviClickHandler } from "@types";

import { Link as RouterLink } from "react-router-dom";
import { Box } from "rebass";
import { styleNaviLink } from "./Navi.styled";

type NaviProps = {
  naviItem: INaviItem;
  onClick: NaviClickHandler;
};

function Navi({ naviItem, onClick }: NaviProps) {
  const { id, name, path, isActive } = naviItem;

  return (
    <Box
      as="span"
      variant={isActive ? "activeNavi" : "defaultNavi"}
      sx={styleNaviLink}
    >
      <RouterLink to={path} onClick={() => onClick(id)}>
        {name}
      </RouterLink>
    </Box>
  );
}

export default Navi;
