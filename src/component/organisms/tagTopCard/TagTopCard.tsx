import React, { useRef, useEffect } from "react";
import useTab from "hooks/useTab";
import drawTagTopBar from "utils/drawTagTopBar";

import { Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";

import { TAB_TOP_LIST } from "../../../constants";

import { IUFOTagTop } from "types";

type tagTopCardProps = {
  tagTopData: IUFOTagTop;
};

function TagTopCard({ tagTopData }: tagTopCardProps) {
  const { tabList, onHandleTabClick, currentTabData } = useTab(TAB_TOP_LIST);
  const $elemChartWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ($elemChartWrapper.current && tagTopData) {
      drawTagTopBar($elemChartWrapper.current, tagTopData, currentTabData.id);
    }
  }, [currentTabData, tagTopData]);

  return (
    <WidgetCard>
      <WidgetHeader title="UFO Top20 태그"></WidgetHeader>
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

export default TagTopCard;
