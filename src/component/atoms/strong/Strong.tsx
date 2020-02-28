import React from "react";
import { Text, TextProps } from "rebass";

interface StrongProps extends TextProps {
  children: React.ReactNode;
}

function Strong({ children, ...rest }: StrongProps) {
  return (
    <Text as="strong" {...rest}>
      {children}
    </Text>
  );
}

export default Strong;
