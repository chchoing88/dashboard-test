import React from "react";

import { Text, TextProps } from "rebass";

type IndexNumberProps = TextProps & {
  children: React.ReactNode;
};

function IndexNumber({ children, ...rest }: IndexNumberProps) {
  return (
    <Text
      as="span"
      sx={{
        fontFamily: "arial,sans-serif",
        fontStyle: "italic"
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default IndexNumber;
