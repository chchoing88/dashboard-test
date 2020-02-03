import React from "react";
import { Box, BoxProps } from "rebass";

interface TabLiProps extends BoxProps {
  children: (React.ReactElement | boolean)[] | React.ReactElement;
}

function TabLi({ children, ...rest }: TabLiProps) {
  return (
    <Box
      as="li"
      sx={{
        position: "relative",
        float: "left"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default TabLi;
