import React from "react";
import useTab from "hooks/useTab";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";
import { ITabItem } from "types";

type tagTopCardProps = {
  tabList: ITabItem[];
};

function TagTopCard({ tabList }: tagTopCardProps) {
  const { tabListState, onHandleTabClick } = useTab(tabList);

  return (
    <WidgetCard>
      <WidgetHeader title="UFO Top20 태그"></WidgetHeader>
      <TabGroup tabList={tabListState} onClick={onHandleTabClick}></TabGroup>
      tagTopCard
    </WidgetCard>
  );
}

export default TagTopCard;
