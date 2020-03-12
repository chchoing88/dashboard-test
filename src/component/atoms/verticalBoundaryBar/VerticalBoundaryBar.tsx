import React from "react";
import { Box, BoxProps } from "rebass";

type VerticalBoundaryBarProps = BoxProps & {
  children?: never;
};

function VerticalBoundaryBar({ ...rest }: VerticalBoundaryBarProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        bg: "rgba(0,0,0,.1)",
        width: "1px",
        height: "20px",
        left: "0"
      }}
      {...rest}
    ></Box>
  );
}

export default VerticalBoundaryBar;
