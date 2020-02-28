import React, { memo } from "react";
import useTab from "hooks/useTab";

import { Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";
import TagTopBarChart from "component/molecules/tagTopBarChart/TagTopBarChart";
import LoadBoundary from "component/atoms/loadBoundary/LoadBoundary";
import ErrorBoundary from "component/atoms/errorBoundary/ErrorBoundary";
import StatusError from "component/atoms/statusError/StatusError";

import { TAB_TOP_LIST } from "../../../constants";

import { IUFOTagTop, IAPIError } from "types";

type tagTopCardProps = {
  tagTopData: IUFOTagTop;
  error: IAPIError;
  isLoading: boolean;
};

function TagTopCard({ tagTopData, isLoading, error }: tagTopCardProps) {
  const { tabList, onHandleTabClick, currentTabData } = useTab(TAB_TOP_LIST);

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
          <ErrorBoundary isError={!!error} errorComponent={<StatusError />}>
            <TabGroup tabList={tabList} onClick={onHandleTabClick}></TabGroup>
            {tagTopData && (
              <TagTopBarChart
                tagTopData={tagTopData}
                currentTabData={currentTabData}
              ></TagTopBarChart>
            )}
          </ErrorBoundary>
        </LoadBoundary>
      </Box>
    </WidgetCard>
  );
}

export default memo(TagTopCard);
