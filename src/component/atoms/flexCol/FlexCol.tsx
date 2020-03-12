import React from "react";
import { Box, BoxProps } from "rebass";

type FlexColProps = BoxProps & {
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  col: 12
};

function FlexCol({ children, col, ...rest }: FlexColProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: `${(100 / 12) * col}%`,
        px: 3
      }}
      {...rest}
    >
      {" "}
      {children}
    </Box>
  );
}

FlexCol.defaultProps = defaultProps;

export default FlexCol;
