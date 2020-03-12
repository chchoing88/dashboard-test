import React from "react";

import TabUl from "component/atoms/tabUl/TabUl";
import TabLi from "component/atoms/tabLi/TabLi";
import TabButton from "component/atoms/tabButton/TabButton";

import { ITabItem, TabThemeType } from "types";

type TabGroupProps = {
  onClick: (key: any) => void;
} & typeof defaultProps;

const defaultProps = {
  theme: "underLine" as TabThemeType,
  tabList: [] as ITabItem<string>[]
};

function TabGroup({ tabList, theme, onClick }: TabGroupProps) {
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
            isNew={tabItem.isNew}
            onClick={_ => onClick(tabItem.id)}
            css={{ letterSpacing: "-1px" }}
          ></TabButton>
        </TabLi>
      ))}
    </TabUl>
  );
}

TabGroup.defaultProps = defaultProps;

export default TabGroup;
