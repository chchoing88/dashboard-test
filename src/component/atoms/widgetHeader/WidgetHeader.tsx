import React from "react";
import { Text, BoxProps } from "rebass";

interface WidgetHeaderProps extends BoxProps {
  title: string;
}

function WidgetHeader({ title, ...rest }: WidgetHeaderProps) {
  return (
    <Text
      as="strong"
      sx={{
        display: "block",
        py: 2,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "rgb(212, 212, 213)",
        bg: "base",
        textAlign: "center",
        fontSize: 2
      }}
      {...rest}
    >
      {title}
    </Text>
  );
}

export default WidgetHeader;
