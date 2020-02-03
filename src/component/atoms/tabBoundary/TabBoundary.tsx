import React from "react";
import { Box, BoxProps } from "rebass";

interface TabBoundaryProps extends BoxProps {}

function TabBoundary({ ...rest }: TabBoundaryProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        bg: "rgba(0,0,0,.1)",
        width: "1px",
        top: "20px",
        bottom: "20px",
        left: "0"
      }}
      {...rest}
    ></Box>
  );
}

export default TabBoundary;
