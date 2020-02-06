import React, { useRef, useEffect } from "react";
import useTab from "hooks/useTab";
import drawTagOccupancy from "utils/drawTagOccupancy";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";

import { TAB_OCCUPANCY_LIST } from "../../../constants";
import { Box } from "rebass";

type TagOccupancyCardProps = {};

function TagOccupancyCard() {
  const { tabList, onHandleTabClick } = useTab(TAB_OCCUPANCY_LIST);
  const $elemChartWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ($elemChartWrapper.current) {
      drawTagOccupancy($elemChartWrapper.current);
    }
  }, []);
  return (
    <WidgetCard>
      <WidgetHeader title="UFO 태그별 점유도"></WidgetHeader>
      <TabGroup tabList={tabList} onClick={onHandleTabClick}></TabGroup>
      <Box
        sx={{
          mt: 1,
          minHeight: "789px"
        }}
        ref={$elemChartWrapper}
      ></Box>
    </WidgetCard>
  );
}

export default TagOccupancyCard;
