import React from "react";
import { Box, BoxProps } from "rebass";

interface FlexColProps extends BoxProps {
  children: React.ReactNode;
  col: number;
}
function FlexCol({ children, col, ...rest }: FlexColProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: `${100 / col}%`,
        px: 3
      }}
      {...rest}
    >
      {" "}
      {children}
    </Box>
  );
}

FlexCol.defaultProps = {
  col: 12
};

export default FlexCol;
