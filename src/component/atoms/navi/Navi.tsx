import React from "react";
import { INaviItem } from "types";

// import { NavLink } from "react-router-dom";
import AuthLink from "component/common/authLink/AuthLink";
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
      <AuthLink exact to={path} activeClassName="active">
        {name}
      </AuthLink>
    </Box>
  );
}

export default Navi;
