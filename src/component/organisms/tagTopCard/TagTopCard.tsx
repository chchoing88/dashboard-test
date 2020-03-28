import React, { memo } from "react";
import useTab from "hooks/useTab";

import { Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";
import TagTopBarChart from "component/molecules/tagTopBarChart/TagTopBarChart";
import LoadBoundary from "component/common/loadBoundary/LoadBoundary";
import ErrorBoundary from "component/common/errorBoundary/ErrorBoundary";
import StatusError from "component/atoms/statusError/StatusError";
import BigReady from "component/molecules/bigReady/BigReady";

import {
  TAB_TOP_LIST,
  TAG_TOP_TYPE,
  TAG_TOP_BAR_COLOR
} from "../../../constants";

import { IUFOTagTop, IAPIError } from "types";

type tagTopCardProps = {
  tagTopData: IUFOTagTop | undefined;
  error: IAPIError;
  isLoading: boolean;
};

function TagTopCard({ tagTopData, isLoading, error }: tagTopCardProps) {
  const { tabList, onHandleTabClick, currentTabData } = useTab(TAB_TOP_LIST);
  const tagTopList = tagTopData
    ? tagTopData[TAG_TOP_TYPE[currentTabData.id]]
    : [];
  const tagBarColor = TAG_TOP_BAR_COLOR[TAG_TOP_TYPE[currentTabData.id]];
  const isTagTopList = tagTopList.length > 0;

  return (
    <WidgetCard>
      <WidgetHeader title="UFO Top20 태그"></WidgetHeader>
      <Box
        sx={{
          mt: 1,
          minHeight: "827px"
        }}
      >
        <LoadBoundary isLoading={isLoading} css={{ paddingTop: "65px" }}>
          <ErrorBoundary error={error} errorComponent={<StatusError />}>
            <TabGroup tabList={tabList} onClick={onHandleTabClick}></TabGroup>
            {tagTopData ? (
              isTagTopList ? (
                <TagTopBarChart
                  tagTopList={tagTopList}
                  tagBarColor={tagBarColor}
                ></TagTopBarChart>
              ) : (
                <BigReady></BigReady>
              )
            ) : null}
          </ErrorBoundary>
        </LoadBoundary>
      </Box>
    </WidgetCard>
  );
}

export default memo(TagTopCard);
