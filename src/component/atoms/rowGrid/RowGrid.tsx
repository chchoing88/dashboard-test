import React from "react";
import { Box, BoxProps } from "rebass";

interface RowGridProps extends BoxProps {
  children: React.ReactNode;
}

function RowGrid({ children, ...rest }: RowGridProps) {
  return (
    <Box
      sx={{
        overflow: "hidden"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default RowGrid;
