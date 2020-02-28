import { useState, useCallback, useMemo } from "react";
import { ITabItem } from "types";
import { setActiveByID } from "utils";

function useTab<T>(tabDataList: ITabItem<T>[]) {
  const [tabList, setTabList] = useState<ITabItem<T>[]>(tabDataList);
  // Computed 한 값
  // 현재 탭 객체
  const currentTabData = useMemo(() => {
    const activeIndex = tabList.findIndex(tabData => tabData.isActive);
    return tabList[activeIndex];
  }, [tabList]);

  // 탭 눌렀을때
  const onHandleTabClick = useCallback(
    (tabId: T): void => {
      if (currentTabData.id !== tabId) {
        setTabList(setActiveByID<ITabItem<T>, T>(tabId));
      }
    },
    [currentTabData]
  );

  return {
    currentTabData,
    tabList,
    onHandleTabClick
  };
}

export default useTab;
