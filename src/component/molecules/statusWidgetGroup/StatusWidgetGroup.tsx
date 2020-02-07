import React from "react";
// import { convertCommaValueOfObject } from "utils";

import { Box } from "rebass";
import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import StatusWidgetCard from "component/molecules/statusWidgetCard/StatusWidgetCard";

import { INIT_UFO_STATUS } from "../../../constants";

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
  const taggedUsersStatus = statusGroupData?.userCnt || INIT_UFO_STATUS;
  const totalTagsStatus = statusGroupData?.totalTags || INIT_UFO_STATUS;
  const avgTagsByUserStatus = statusGroupData?.avgTagsByUser || INIT_UFO_STATUS;

  return (
    <Box sx={{ mt: 5 }}>
      <RowGrid>
        <ColGrid width="33.33%">
          <StatusWidgetCard
            title="태깅 유저수"
            unit="명"
            status={taggedUsersStatus}
            isLoading={isLoading}
            error={error}
          ></StatusWidgetCard>
        </ColGrid>
        <ColGrid width="33.33%">
          <StatusWidgetCard
            title="태깅된 총 태그수"
            unit="개"
            status={totalTagsStatus}
            isLoading={isLoading}
            error={error}
          ></StatusWidgetCard>
        </ColGrid>
        <ColGrid width="33.33%">
          <StatusWidgetCard
            title="태깅된 총 태그수"
            unit="개"
            status={avgTagsByUserStatus}
            isLoading={isLoading}
            error={error}
          ></StatusWidgetCard>
        </ColGrid>
      </RowGrid>
    </Box>
  );
}

export default StatusWidgetGroup;
