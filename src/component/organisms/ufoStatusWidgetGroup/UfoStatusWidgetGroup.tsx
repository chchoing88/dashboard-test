import React, { useMemo, memo } from "react";
import { convertCommaValueOfObject, convertToFixValueOfObject } from "utils";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import UfoStatusWidgetCard from "component/molecules/ufoStatusWidgetCard/UfoStatusWidgetCard";

import { IUFOStatusGroup, IAPIError, IUFOStatus } from "types";

type UfoStatusWidgetGroupProps = {
  statusGroupData: IUFOStatusGroup | undefined;
  error: IAPIError;
  isLoading: boolean;
};

function UfoStatusWidgetGroup({
  statusGroupData,
  error,
  isLoading
}: UfoStatusWidgetGroupProps) {
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
      <ColGrid col={4}>
        <UfoStatusWidgetCard
          title="태깅 유저수"
          unit="명"
          status={taggedUsersStatus}
          isLoading={isLoading}
          error={error}
        ></UfoStatusWidgetCard>
      </ColGrid>
      <ColGrid col={4}>
        <UfoStatusWidgetCard
          title="태깅된 총 태그수"
          unit="개"
          status={totalTagsStatus}
          isLoading={isLoading}
          error={error}
        ></UfoStatusWidgetCard>
      </ColGrid>
      <ColGrid col={4}>
        <UfoStatusWidgetCard
          title="인당 평균 태그수"
          unit="개"
          status={avgTagsByUserStatus}
          isLoading={isLoading}
          error={error}
        ></UfoStatusWidgetCard>
      </ColGrid>
    </RowGrid>
  );
}

export default memo(UfoStatusWidgetGroup);
