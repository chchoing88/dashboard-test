import React from "react";
import { Text, TextProps } from "rebass";

type ContentSubTitleProps = TextProps & {
  children: React.ReactNode;
};

function ContentSubTitle({ children, ...rest }: ContentSubTitleProps) {
  return (
    <Text
      as="span"
      sx={{
        display: "block",
        color: "content",
        fontSize: 1,
        fontWeight: "normal"
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default ContentSubTitle;
