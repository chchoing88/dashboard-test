import React from "react";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import { Text } from "rebass";

type InfoCardProps = {
  title: string;
  infoText: string;
};
function InfoCard({ title, infoText }: InfoCardProps) {
  return (
    <WidgetCard>
      <WidgetHeader title={title}></WidgetHeader>
      <Text sx={{ fontSize: 2, py: 2 }}>{infoText}</Text>
    </WidgetCard>
  );
}

export default InfoCard;
