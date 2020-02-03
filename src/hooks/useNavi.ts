import { useState } from "react";
import { INaviItem, NaviClickHandler, NaviHooks } from "types";
import { NAVI_INIT_STATE } from "../constants";

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
