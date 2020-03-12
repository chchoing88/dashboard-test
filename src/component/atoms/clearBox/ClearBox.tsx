import React from "react";
import { Box, BoxProps } from "rebass";

type ClearBoxProps = BoxProps & {
  children: React.ReactNode;
};

function ClearBox({ children, ...rest }: ClearBoxProps) {
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

export default ClearBox;
