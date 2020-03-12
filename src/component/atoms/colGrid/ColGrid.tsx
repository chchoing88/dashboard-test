import React from "react";
import { Box, BoxProps } from "rebass";

type ColGridProps = BoxProps & {
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  col: 12
};

function ColGrid({ children, col, ...rest }: ColGridProps) {
  return (
    <Box
      sx={{
        position: "relative",
        float: "left",
        width: `${(100 / 12) * col}%`,
        px: 3
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

ColGrid.defaultProps = defaultProps;

export default ColGrid;
