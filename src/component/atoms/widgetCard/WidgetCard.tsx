import React from "react";
import { Box, BoxProps } from "rebass";

interface WidgetCardProps extends BoxProps {
  children: React.ReactNode;
}

function WidgetCard({ children, ...rest }: WidgetCardProps) {
  return (
    <Box variant="widgetCard" {...rest}>
      {children}
    </Box>
  );
}

export default WidgetCard;
