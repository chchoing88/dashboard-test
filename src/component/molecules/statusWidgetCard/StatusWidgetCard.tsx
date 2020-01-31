import React from "react";
import { Text } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import EmpFigures from "component/atoms/empFigures/EmpFigures";
import TabList from "component/atoms/tabList/TabList";

type StatusWidgetCardProps = {
  title: string;
  figure: number;
  unit: string;
};
// {overall: 44011299, interest: 39301944, poi: 42842842}

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

      <TabList>
        <div>안녕</div>
        <div>안녕</div>
      </TabList>
    </WidgetCard>
  );
}

export default StatusWidgetCard;
