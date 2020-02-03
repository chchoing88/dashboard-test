import React from "react";
import { Box, BoxProps } from "rebass";

interface TabLiProps extends BoxProps {
  children: (React.ReactElement | boolean)[] | React.ReactElement | string;
  isActive: boolean;
}

function TabLi({ children, isActive, ...rest }: TabLiProps) {
  return (
    <Box
      as="li"
      sx={{
        position: "relative",
        float: "left",
        "&:after": isActive
          ? {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "2px",
              bg: "point",
              content: "''"
            }
          : {
              display: "none"
            }
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default TabLi;
