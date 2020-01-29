import React from "react";
import { Box } from "rebass";

type WidgetCardProps = {
  children: React.ReactNode;
};

function WidgetCard({ children }: WidgetCardProps) {
  return <Box variant="widgetCard">{children}</Box>;
}

export default WidgetCard;
