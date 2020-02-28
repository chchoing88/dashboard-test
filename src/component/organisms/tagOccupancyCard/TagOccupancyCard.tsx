import React, { memo, useEffect } from "react";
import useTab from "hooks/useTab";
import useApiObservable from "hooks/useApiObservable";
import { occupancyApi } from "api";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import TabGroup from "component/molecules/tabGroup/TabGroup";
import TagOccupancySunburstChart from "component/molecules/tagOccupancySunburstChart/TagOccupancySunburstChart";
import ErrorBoundary from "component/atoms/errorBoundary/ErrorBoundary";
import LoadBoundary from "component/atoms/loadBoundary/LoadBoundary";
import StatusError from "component/atoms/statusError/StatusError";

import { TAB_OCCUPANCY_LIST } from "../../../constants";

import {
  IFilterItem,
  IOccupancyApiFetchParameter,
  IOccupancyItem
} from "types";
import { Box } from "rebass";

type TagOccupancyCardProps = {
  currentFilterData: IFilterItem;
};

function TagOccupancyCard({ currentFilterData }: TagOccupancyCardProps) {
  const { tabList, onHandleTabClick, currentTabData } = useTab(
    TAB_OCCUPANCY_LIST
  );
  const [occupancyState, subject$] = useApiObservable<
    IOccupancyApiFetchParameter
  >(occupancyApi.fetch);

  useEffect(() => {
    subject$.next({
      id: currentFilterData.id,
      type: currentTabData.id
    });
  }, [subject$, currentFilterData, currentTabData]);

  const responseOccupancy = occupancyState.success
    ?.response as IOccupancyItem[];

  return (
    <WidgetCard>
      <WidgetHeader title="UFO 태그별 점유도"></WidgetHeader>
      <Box
        sx={{
          mt: 1,
          minHeight: "827px"
        }}
      >
        <LoadBoundary
          isLoading={occupancyState.isLoading}
          css={{ paddingTop: "65px" }}
        >
          <ErrorBoundary
            isError={!!occupancyState.error}
            errorComponent={<StatusError />}
          >
            <TabGroup tabList={tabList} onClick={onHandleTabClick}></TabGroup>
            {responseOccupancy && (
              <TagOccupancySunburstChart
                occupancyDataList={responseOccupancy}
              />
            )}
          </ErrorBoundary>
        </LoadBoundary>
      </Box>
    </WidgetCard>
  );
}

export default memo(TagOccupancyCard);
