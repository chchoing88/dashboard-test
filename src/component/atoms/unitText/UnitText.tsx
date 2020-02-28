import React from "react";
import { Text, TextProps } from "rebass";

interface UnitTextProps extends TextProps {
  children: React.ReactNode;
}

function UnitText({ children, ...rest }: UnitTextProps) {
  return (
    <Text
      as="span"
      sx={{
        fontSize: 2,
        color: "content"
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default UnitText;
