import React from "react";
import { Box, BoxProps } from "rebass";

interface DdProps extends BoxProps {
  children: React.ReactElement;
}

function Dd({ children, ...rest }: DdProps) {
  return (
    <Box
      as="dd"
      sx={{
        overflow: "hidden"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Dd;
