import React from "react";
import { Flex, FlexProps } from "rebass";

interface FlexRowProps extends FlexProps {
  children: React.ReactNode;
}

function FlexRow({ children, ...rest }: FlexRowProps) {
  return (
    <Flex
      sx={{
        mx: "-16px",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "stretch"
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
}

export default FlexRow;
