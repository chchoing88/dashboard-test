import React from "react";
import { Text, TextProps } from "rebass";

type NewBadgeProps = TextProps & {};

function NewBadge({ ...rest }: NewBadgeProps) {
  return (
    <Text
      sx={{
        position: "absolute",
        fontSize: 0,
        color: "rgb(245, 114, 35)",
        ml: 1,
        fontWeight: "bold",
        lineHeight: "12px",
        top: 0,
        right: "-12px"
      }}
      {...rest}
    >
      N
    </Text>
  );
}

export default NewBadge;
