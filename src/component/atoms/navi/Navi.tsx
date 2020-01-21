import React from "react";
import { Link } from "react-router-dom";

import { INaviItem, NaviClickHandler } from "types";

type NaviProps = {
  naviItem: INaviItem;
  onClick: NaviClickHandler;
};

function Navi({ naviItem, onClick }: NaviProps) {
  const { id, name, path } = naviItem;
  return (
    <Link to={path} onClick={() => onClick(id)}>
      {name}
    </Link>
  );
}

export default Navi;
