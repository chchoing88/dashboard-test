import React from "react";
import { Box, BoxProps } from "rebass";

interface ColGridProps extends BoxProps {
  children: (React.ReactElement | boolean)[] | React.ReactElement;
}

function ColGrid({ children, ...rest }: ColGridProps) {
  return (
    <Box
      sx={{
        position: "relative",
        float: "left",
        width: "8.33%",
        px: 3
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default ColGrid;
