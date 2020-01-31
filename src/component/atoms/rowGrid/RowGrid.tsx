import React from "react";
import { Box, BoxProps } from "rebass";

interface RowGridProps extends BoxProps {
  children: React.ReactElement[] | React.ReactElement;
}

function RowGrid({ children, ...rest }: RowGridProps) {
  return (
    <Box
      sx={{
        "&:after": {
          display: "block",
          clear: "both",
          content: "''"
        }
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default RowGrid;
