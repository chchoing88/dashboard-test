import React from "react";
import { Box, BoxProps } from "rebass";

interface TabUlProps extends BoxProps {
  children: React.ReactElement[];
}

function TabUl({ children, ...rest }: TabUlProps) {
  return (
    <Box
      as="ul"
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

export default TabUl;
