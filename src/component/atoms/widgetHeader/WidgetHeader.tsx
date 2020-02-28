import React from "react";
import { Text, BoxProps } from "rebass";

interface WidgetHeaderProps extends BoxProps {
  title: string;
  bgColor?: boolean;
  children?: never;
}

function WidgetHeader({ title, bgColor, ...rest }: WidgetHeaderProps) {
  return (
    <Text
      as="strong"
      sx={{
        display: "block",
        py: "10px",
        bg: bgColor ? "base" : "none",
        textAlign: "center",
        fontSize: "15px"
      }}
      {...rest}
    >
      {title}
    </Text>
  );
}

WidgetHeader.defaultProps = {
  bgColor: true
};

export default WidgetHeader;
