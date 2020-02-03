import { useState, useCallback, useMemo } from "react";
import { ITabItem, TabHooks, ITabId } from "types";
// [
//   {
//     id: 'abc',
//     name: 'abc',
//     isActive: true,
//   },
//   {
//     id: 'def',
//     name: 'dev',
//     isActive: false,
//   },
//   {
//     id: 'ghi',
//     name: 'ghi',
//     isActive: false,
//   },
// ]

function useTab(tabDataList: ITabItem[]): TabHooks {
  const [tabList, setTabList] = useState<ITabItem[]>(tabDataList);

  // 탭 눌렀을때
  const onHandleTabClick = useCallback((tabId: ITabId[keyof ITabId]): void => {
    // tabName 이 맞는게 있으면 그걸 true 바꾸고 나머지 false
    // 맞는게 없으면 그대로 두자.
    // 함수형 업데이트
    setTabList(tabList => {
      if (tabList.some(tabData => tabData.id === tabId)) {
        return tabList.map(tabData => {
          tabData.isActive = tabData.id === tabId;
          return tabData;
        });
      }
      return tabList;
    });
  }, []);

  // Computed 한 값
  // 현재 탭 객체
  const currentTabData = useMemo(() => {
    const activeIndex = tabList.findIndex(tabData => tabData.isActive);
    return tabList[activeIndex];
  }, [tabList]);

  return {
    currentTabData,
    tabListState: tabList,
    onHandleTabClick
  };
}

export default useTab;
