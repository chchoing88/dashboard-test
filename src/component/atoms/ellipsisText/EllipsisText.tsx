import React from "react";

import { Text, TextProps } from "rebass";

type EllipsisTextProps = TextProps & {
  children: React.ReactNode;
};

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
