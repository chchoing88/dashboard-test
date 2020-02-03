import React from "react";

import TabUl from "component/atoms/tabUl/TabUl";
import TabLi from "component/atoms/tabLi/TabLi";
import TabButton from "component/atoms/tabButton/TabButton";
import Boundary from "component/atoms/boundary/Boundary";

import { ITabItem, TabClickHandler } from "types";

type TabGroupProps = {
  tabList: ITabItem[];
  onClick: TabClickHandler;
};

function TabGroup({ tabList, onClick }: TabGroupProps) {
  const length = tabList.length || 0;
  return (
    <TabUl>
      {tabList.map((tabItem, index) => (
        <TabLi
          key={tabItem.id}
          isActive={tabItem.isActive}
          css={{
            width: `${100 / length}%`
          }}
        >
          <TabButton
            name={tabItem.name}
            isActive={tabItem.isActive}
            onClick={e => onClick(tabItem.id)}
          ></TabButton>
          {index !== 0 && (
            <Boundary
              css={{
                height: "15px",
                top: "11px"
              }}
            />
          )}
        </TabLi>
      ))}
    </TabUl>
  );
}

TabGroup.defaultProps = {
  tabList: []
};

export default TabGroup;
