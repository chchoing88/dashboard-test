import React from "react";
import useFilter from "hooks/useFilter";
import useApiObservable from "hooks/useApiObservable";
import { overallApi } from "api";

import { Box } from "rebass";
import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import FilterSection from "component/molecules/filterSection/FilterSection";
import StatusWidgetGroup from "component/molecules/statusWidgetGroup/StatusWidgetGroup";
import TagOccupancyCard from "component/organisms/tagOccupancyCard/TagOccupancyCard";
import TagTopCard from "component/molecules/tagTopCard/TagTopCard";

import { FILTER_LIST } from "../../../constants";

import { IFilterItem, IOverallAPIResponse } from "types";

function TotalStatus() {
  const { filterList, onClickFilterHandler, currentFilterData$ } = useFilter(
    FILTER_LIST
  );
  // observable 등록.
  // currentFilterData 변경되었을시..또 호출하는 방법은? observable 등록하는 방법은?
  // 데이터가 바뀐걸 감지하고 API를 호출하자.
  const { success, error, isLoading } = useApiObservable<IFilterItem>(
    currentFilterData$,
    overallApi.fetch
  );

  const responseStatus = success?.response as IOverallAPIResponse;
  const statusGroupData = responseStatus?.users;

  return (
    <Box variant="section" css={{ marginTop: "32px" }}>
      <FilterSection
        title="기준 식별자"
        filterButtonList={filterList}
        onClick={onClickFilterHandler}
      ></FilterSection>
      <StatusWidgetGroup
        statusGroupData={statusGroupData}
        error={error}
        isLoading={isLoading}
      ></StatusWidgetGroup>
      <Box sx={{ mt: 6 }}>
        <RowGrid>
          <ColGrid width="66.66%">
            <TagOccupancyCard></TagOccupancyCard>
          </ColGrid>
          <ColGrid width="33.33%">
            <TagTopCard></TagTopCard>
          </ColGrid>
        </RowGrid>
      </Box>
    </Box>
  );
}

export default TotalStatus;
