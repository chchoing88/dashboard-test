import React from "react";
import { Box, BoxProps } from "rebass";

interface ColGridProps extends BoxProps {
  children: React.ReactNode;
  col: number;
}

function ColGrid({ children, col, ...rest }: ColGridProps) {
  return (
    <Box
      sx={{
        position: "relative",
        float: "left",
        width: `${100 / col}%`,
        px: 3
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

ColGrid.defaultProps = {
  col: 12
};

export default ColGrid;
