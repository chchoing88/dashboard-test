import React, { useEffect } from "react";
import useFilter from "hooks/useFilter";
import useApiObservable from "hooks/useApiObservable";
import { overallApi, modificationTimeApi } from "api";

import MainTemplate from "component/templates/MainTemplate";
import TotalStatusInfo from "component/organisms/totalStatusInfo/TotalStatusInfo";
import FilterSection from "component/molecules/filterSection/FilterSection";
import StatusWidgetGroup from "component/organisms/statusWidgetGroup/StatusWidgetGroup";
import TagOccupancyCard from "component/organisms/tagOccupancyCard/TagOccupancyCard";
import TagTopCard from "component/organisms/tagTopCard/TagTopCard";

import { FILTER_LIST } from "../../constants";

import {
  IOverallAPIResponse,
  IOverallAPIFetchParameter,
  IModificationTimeResponse
} from "types";

function Home() {
  const { filterList, onClickFilterHandler, currentFilterData } = useFilter(
    FILTER_LIST
  );
  const [overallState, overallSubject$] = useApiObservable<
    IOverallAPIFetchParameter
  >(overallApi.fetch);

  useEffect(() => {
    overallSubject$.next({
      idType: currentFilterData.id
    });
  }, [overallSubject$, currentFilterData]);

  const overallSuccess = overallState.success?.response as IOverallAPIResponse;
  const statusGroupData = overallSuccess?.users;
  const tagTopData = overallSuccess?.tags?.tagTop20;

  const [timeState, timeSubject$] = useApiObservable<never>(
    modificationTimeApi.fetch
  );
  useEffect(() => {
    timeSubject$.next();
  }, [timeSubject$]);

  const timeSuccess = timeState.success?.response as IModificationTimeResponse;

  return (
    <MainTemplate
      title={<TotalStatusInfo modifyTime={timeSuccess}></TotalStatusInfo>}
      filter={
        <FilterSection
          title="기준 유저키"
          filterButtonList={filterList}
          onClick={onClickFilterHandler}
        ></FilterSection>
      }
      status={
        <StatusWidgetGroup
          statusGroupData={statusGroupData}
          error={overallState.error}
          isLoading={overallState.isLoading}
        ></StatusWidgetGroup>
      }
      occupancy={
        <TagOccupancyCard
          currentFilterData={currentFilterData}
        ></TagOccupancyCard>
      }
      top={
        <TagTopCard
          tagTopData={tagTopData}
          error={overallState.error}
          isLoading={overallState.isLoading}
        ></TagTopCard>
      }
    ></MainTemplate>
  );
}

export default Home;
