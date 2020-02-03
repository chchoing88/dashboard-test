import React from "react";
import useTab from "hooks/useTab";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";

import { TAB_OCCUPANCY_LIST } from "../../../constants";

type TagOccupancyCardProps = {};

function TagOccupancyCard() {
  const { tabList, onHandleTabClick } = useTab(TAB_OCCUPANCY_LIST);
  return (
    <WidgetCard>
      <WidgetHeader title="UFO 태그별 점유도"></WidgetHeader>
      <TabGroup tabList={tabList} onClick={onHandleTabClick}></TabGroup>
      graphData
    </WidgetCard>
  );
}

export default TagOccupancyCard;
