import React, { useEffect } from "react";
import useFilter from "hooks/useFilter";
import useApiObservable from "hooks/useApiObservable";
import { overallApi } from "api";

import MainTemplate from "component/templates/MainTemplate";
import TotalStatusInfo from "component/organisms/totalStatusInfo/TotalStatusInfo";
import FilterSection from "component/molecules/filterSection/FilterSection";
import StatusWidgetGroup from "component/organisms/statusWidgetGroup/StatusWidgetGroup";
import TagOccupancyCard from "component/organisms/tagOccupancyCard/TagOccupancyCard";
import TagTopCard from "component/organisms/tagTopCard/TagTopCard";

import { FILTER_LIST } from "../../constants";

import { IOverallAPIResponse, IOverallAPIFetchParameter } from "types";

function Home() {
  const { filterList, onClickFilterHandler, currentFilterData } = useFilter(
    FILTER_LIST
  );
  const { success, error, isLoading, subject$ } = useApiObservable<
    IOverallAPIFetchParameter
  >(overallApi.fetch);
  useEffect(() => {
    subject$.next({
      idType: currentFilterData.id
    });
  }, [subject$, currentFilterData]);

  const responseStatus = success?.response as IOverallAPIResponse;
  const statusGroupData = responseStatus?.users;
  const tagTopData = responseStatus?.tags?.tagTop20;

  return (
    <MainTemplate
      title={<TotalStatusInfo></TotalStatusInfo>}
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
          error={error}
          isLoading={isLoading}
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
          error={error}
          isLoading={isLoading}
        ></TagTopCard>
      }
    ></MainTemplate>
  );
}

export default Home;
