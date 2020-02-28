import React from "react";
import { INaviItem } from "types";

import { NavLink } from "react-router-dom";
import { Box } from "rebass";
import { styleNaviLink } from "./Navi.styled";

type NaviProps = {
  naviItem: INaviItem;
  children?: never;
};

function Navi({ naviItem }: NaviProps) {
  const { name, path } = naviItem;

  return (
    <Box as="li" sx={styleNaviLink}>
      <NavLink exact to={path} activeClassName="active">
        {name}
      </NavLink>
    </Box>
  );
}

export default Navi;
