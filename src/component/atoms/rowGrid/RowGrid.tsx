import React from "react";
import { Box, BoxProps } from "rebass";

type RowGridProps = BoxProps & {
  children: React.ReactNode;
};

function RowGrid({ children, ...rest }: RowGridProps) {
  return (
    <Box
      sx={{
        mx: "-16px",
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
