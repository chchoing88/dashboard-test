import React from "react";

import TabUl from "component/atoms/tabUl/TabUl";
import TabLi from "component/atoms/tabLi/TabLi";
import TabButton from "component/atoms/tabButton/TabButton";

import { ITabItem } from "types";

type TabGroupProps = {
  tabList: ITabItem<string>[];
  theme?: "underLine" | "fill";
  onClick: (key: any) => void;
};

function TabGroup({ tabList, theme = "underLine", onClick }: TabGroupProps) {
  const length = tabList.length || 0;
  return (
    <TabUl theme={theme}>
      {tabList.map((tabItem, index) => (
        <TabLi
          key={tabItem.id}
          isActive={tabItem.isActive}
          theme={theme}
          index={index}
          css={{
            width: `${100 / length}%`
          }}
        >
          <TabButton
            name={tabItem.name}
            theme={theme}
            isActive={tabItem.isActive}
            onClick={_ => onClick(tabItem.id)}
          ></TabButton>
        </TabLi>
      ))}
    </TabUl>
  );
}

TabGroup.defaultProps = {
  tabList: []
};

export default TabGroup;
