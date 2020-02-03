import React from "react";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";

type tagTopCardProps = {};

function tagTopCard({}: tagTopCardProps) {
  return (
    <WidgetCard>
      <WidgetHeader title="UFO Top20 태그"></WidgetHeader>
      tagTopCard
    </WidgetCard>
  );
}

export default tagTopCard;
