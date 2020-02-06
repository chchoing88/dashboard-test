import React from "react";
import useTab from "hooks/useTab";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";

import { TAB_TOP_LIST } from "../../../constants";
import { Box } from "rebass";

type tagTopCardProps = {};

function TagTopCard() {
  const { tabList, onHandleTabClick } = useTab(TAB_TOP_LIST);

  return (
    <WidgetCard>
      <WidgetHeader title="UFO Top20 태그"></WidgetHeader>
      <TabGroup tabList={tabList} onClick={onHandleTabClick}></TabGroup>
      <Box
        sx={{
          mt: 1,
          minHeight: "789px"
        }}
      >
        tagTopCard
      </Box>
    </WidgetCard>
  );
}

export default TagTopCard;
