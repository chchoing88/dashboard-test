import React from "react";
import { Text, TextProps } from "rebass";

type SmallTextProps = TextProps & {
  children: React.ReactNode;
};

function SmallText({ children, ...rest }: SmallTextProps) {
  return (
    <Text sx={{ fontSize: 0 }} {...rest}>
      {children}
    </Text>
  );
}

export default SmallText;
