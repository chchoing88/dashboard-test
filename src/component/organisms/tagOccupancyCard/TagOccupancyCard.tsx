import React from "react";
import useTab from "hooks/useTab";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";

import { ITabItem } from "types";

type TagOccupancyCardProps = {
  tabList: ITabItem[];
};

function TagOccupancyCard({ tabList }: TagOccupancyCardProps) {
  const { tabListState, onHandleTabClick } = useTab(tabList);
  return (
    <WidgetCard>
      <WidgetHeader title="UFO 태그별 점유도"></WidgetHeader>
      <TabGroup tabList={tabListState} onClick={onHandleTabClick}></TabGroup>
      graphData
    </WidgetCard>
  );
}

export default TagOccupancyCard;
