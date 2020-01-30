import React from "react";
import { Box, BoxProps } from "rebass";

interface DtProps extends BoxProps {
  children: React.ReactNode;
}

function Dt({ children, ...rest }: DtProps) {
  return (
    <Box
      as="dt"
      sx={{
        float: "left",
        width: "70px"
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Dt;
