import React from "react";
import { Text, TextProps } from "rebass";

interface PageDescProps extends TextProps {
  children: React.ReactNode;
}

function PageDesc({ children, ...rest }: PageDescProps) {
  return (
    <Text
      as="span"
      sx={{
        color: "content"
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default PageDesc;
