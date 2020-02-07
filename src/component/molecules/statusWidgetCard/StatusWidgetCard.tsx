import React from "react";

import { Text } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import EmpFigures from "component/atoms/empFigures/EmpFigures";
import StatusSubList from "component/molecules/statusSubList/StatusSubList";

import { IAPIError, IUFOStatus } from "types";

type StatusWidgetCardProps = {
  status: IUFOStatus;
  error: IAPIError;
  title: string;
  unit: string;
  isLoading: boolean;
};
// {overall: 44011299, interest: 39301944, poi: 42842842, 소비: 3123392}

function StatusWidgetCard({
  status,
  title,
  unit,
  error,
  isLoading
}: StatusWidgetCardProps) {
  const subList = [
    {
      title: "관심사",
      figure: status.interest
    },
    {
      title: "사용 업종	",
      figure: status.poi
    },
    {
      title: "소비",
      figure: status.consume
    }
  ];
  return (
    <WidgetCard>
      <WidgetHeader title={title}></WidgetHeader>
      {/* loading */}
      {/* error */}
      <EmpFigures
        figure={status.overall}
        css={{
          paddingTop: "25px",
          paddingBottom: "25px",
          textAlign: "center"
        }}
      >
        <Text
          as="span"
          sx={{
            fontSize: 2,
            color: "content"
          }}
        >
          {unit}
        </Text>
      </EmpFigures>

      <StatusSubList subList={subList}></StatusSubList>
    </WidgetCard>
  );
}

export default StatusWidgetCard;
