import React from "react";
import { Box, BoxProps } from "rebass";

interface TabItemProps extends BoxProps {
  children: React.ReactElement;
}

function TabItem({ children, ...rest }: TabItemProps) {
  return (
    <Box
      as="li"
      sx={{
        float: "left"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default TabItem;
