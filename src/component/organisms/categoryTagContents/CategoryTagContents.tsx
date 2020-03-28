import React, { useEffect } from "react";
import useTab from "hooks/useTab";
import useApiObservable from "hooks/useApiObservable";
import { categoryTagApi } from "api";

import { Box } from "rebass";
import TabGroup from "component/molecules/tabGroup/TabGroup";
import TagTreeChart from "component/molecules/tagTreeChart/TagTreeChart";

import { CATEGORY_TAB_LIST } from "../../../constants";
import { ITagTreeApiFetchParameter, ITagTreeItem } from "types";
import LoadBoundary from "component/common/loadBoundary/LoadBoundary";
import ErrorBoundary from "component/common/errorBoundary/ErrorBoundary";
import StatusError from "component/atoms/statusError/StatusError";

const NODE_HEIGHT = 25;
const MIN_CHART_HEIGHT = 1000;

function CategoryTagContents() {
  const { tabList, onHandleTabClick, currentTabData } = useTab(
    CATEGORY_TAB_LIST
  );
  const [tagTreeState, subject$] = useApiObservable<ITagTreeApiFetchParameter>(
    categoryTagApi.fetch
  );
  useEffect(() => {
    subject$.next({
      type: currentTabData.id
    });
  }, [currentTabData, subject$]);

  const tagChartData = {
    tree: (tagTreeState.success?.response as ITagTreeItem[]) || []
  };

  const tagChartHeight = tagChartData.tree.length * NODE_HEIGHT;
  const resultChartHeight =
    tagChartHeight < MIN_CHART_HEIGHT ? MIN_CHART_HEIGHT : tagChartHeight;

  return (
    <Box>
      <TabGroup
        theme="fill"
        tabList={tabList}
        onClick={onHandleTabClick}
      ></TabGroup>
      <Box variant="section" css={{ marginTop: "20px" }}>
        <LoadBoundary
          isLoading={tagTreeState.isLoading}
          css={{ padding: "100px 0" }}
        >
          <ErrorBoundary
            error={tagTreeState.error}
            errorComponent={<StatusError></StatusError>}
            css={{ padding: "100px 0" }}
          >
            <TagTreeChart
              data={tagChartData}
              actions={false}
              height={resultChartHeight}
              renderer={"svg"}
            ></TagTreeChart>
          </ErrorBoundary>
        </LoadBoundary>
      </Box>
    </Box>
  );
}

export default CategoryTagContents;
