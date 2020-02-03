import React from "react";
import { Text } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import EmpFigures from "component/atoms/empFigures/EmpFigures";
import StatusSubList from "component/molecules/statusSubList/StatusSubList";

type StatusWidgetCardProps = {
  title: string;
  figure: number;
  unit: string;
};
// {overall: 44011299, interest: 39301944, poi: 42842842, 소비: 3123392}

function StatusWidgetCard() {
  return (
    <WidgetCard>
      <WidgetHeader title="UFO 태깅유저수"></WidgetHeader>
      <EmpFigures
        figure={44100100}
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
          명
        </Text>
      </EmpFigures>

      <StatusSubList subList={[{}, {}, {}]}></StatusSubList>
    </WidgetCard>
  );
}

export default StatusWidgetCard;
