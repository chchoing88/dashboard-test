import React from "react";

import { Text, TextProps } from "rebass";

interface EllipsisTextProps extends TextProps {
  children: React.ReactNode;
}

function EllipsisText({ children, ...rest }: EllipsisTextProps) {
  return (
    <Text
      sx={{
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default EllipsisText;
