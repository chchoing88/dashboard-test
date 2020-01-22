import { useState } from "react";
import { INaviItem, NaviClickHandler, NaviHooks } from "@types";

const NAVI_INIT_STATE: INaviItem[] = [
  {
    id: "home",
    name: "전체 현황",
    path: "/",
    isActive: true
  },
  {
    id: "analysis",
    name: "사용자분석",
    path: "/analysis",
    isActive: false
  },
  {
    id: "tag",
    name: "카테고리 태그",
    path: "/tag",
    isActive: false
  }
];

function useNavi(): NaviHooks {
  const [naviListState, setNaviListState] = useState<INaviItem[]>(
    NAVI_INIT_STATE
  );

  const onNaviClick: NaviClickHandler = id => {
    console.log("onNaviClick");

    setNaviListState(prevNaviListState => {
      return prevNaviListState.map(naviState => {
        naviState.isActive = false;

        if (naviState.id === id) {
          naviState.isActive = true;
        }

        return naviState;
      });
    });
  };

  return [naviListState, onNaviClick];
}

export default useNavi;
