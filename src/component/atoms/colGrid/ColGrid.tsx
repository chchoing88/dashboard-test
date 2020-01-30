import React from "react";
import { Box, BoxProps } from "rebass";

interface ColGridProps extends BoxProps {
  children: React.ReactNode;
}

function ColGrid({ children, ...rest }: ColGridProps) {
  return (
    <Box
      sx={{
        float: "left",
        width: "8.33%"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default ColGrid;
