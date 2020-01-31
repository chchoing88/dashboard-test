import React from "react";
import { Box, BoxProps } from "rebass";

interface DlProps extends BoxProps {
  children: React.ReactElement[];
}

function Dl({ children, ...rest }: DlProps) {
  return (
    <Box
      as="dl"
      sx={{
        overflow: "hidden"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Dl;
