import React from "react";
import { Text, TextProps } from "rebass";

type PageDescProps = TextProps & {
  children: React.ReactNode;
};

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
