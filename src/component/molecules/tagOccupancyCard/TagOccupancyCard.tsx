import React from "react";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";

type TagOccupancyCardProps = {};

function TagOccupancyCard({}: TagOccupancyCardProps) {
  return (
    <WidgetCard>
      <WidgetHeader title="UFO 태그별 점유도"></WidgetHeader>
      TagOccupancyCard
    </WidgetCard>
  );
}

export default TagOccupancyCard;
