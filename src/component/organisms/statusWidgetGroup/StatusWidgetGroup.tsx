import React, { useMemo, memo } from "react";
import { convertCommaValueOfObject, convertToFixValueOfObject } from "utils";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import StatusWidgetCard from "component/molecules/statusWidgetCard/StatusWidgetCard";

import { IUFOStatusGroup, IAPIError, IUFOStatus } from "types";

type StatusWidgetGroupProps = {
  statusGroupData: IUFOStatusGroup;
  error: IAPIError;
  isLoading: boolean;
};

function StatusWidgetGroup({
  statusGroupData,
  error,
  isLoading
}: StatusWidgetGroupProps) {
  // observable 등록.
  // currentFilterData 변경되었을시..또 호출하는 방법은? observable 등록하는 방법은?
  // 데이터가 바뀐걸 감지하고 API를 호출하자.
  const taggedUsersStatus = useMemo(() => {
    return convertCommaValueOfObject<IUFOStatus>(statusGroupData?.userCnt);
  }, [statusGroupData]);

  const totalTagsStatus = useMemo(() => {
    return convertCommaValueOfObject<IUFOStatus>(statusGroupData?.totalTags);
  }, [statusGroupData]);

  const avgTagsByUserStatus = useMemo(() => {
    return convertToFixValueOfObject<IUFOStatus>(
      statusGroupData?.avgTagsByUser
    );
  }, [statusGroupData]);

  return (
    <RowGrid>
      <ColGrid col={3}>
        <StatusWidgetCard
          title="태깅 유저수"
          unit="명"
          status={taggedUsersStatus}
          isLoading={isLoading}
          error={error}
        ></StatusWidgetCard>
      </ColGrid>
      <ColGrid col={3}>
        <StatusWidgetCard
          title="태깅된 총 태그수"
          unit="개"
          status={totalTagsStatus}
          isLoading={isLoading}
          error={error}
        ></StatusWidgetCard>
      </ColGrid>
      <ColGrid col={3}>
        <StatusWidgetCard
          title="인당 평균 태그수"
          unit="개"
          status={avgTagsByUserStatus}
          isLoading={isLoading}
          error={error}
        ></StatusWidgetCard>
      </ColGrid>
    </RowGrid>
  );
}

export default memo(StatusWidgetGroup);
