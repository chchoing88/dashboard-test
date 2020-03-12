import React from "react";
import { Text, TextProps } from "rebass";

type StrongProps = TextProps & {
  children: React.ReactNode;
};

function Strong({ children, ...rest }: StrongProps) {
  return (
    <Text as="strong" {...rest}>
      {children}
    </Text>
  );
}

export default Strong;
