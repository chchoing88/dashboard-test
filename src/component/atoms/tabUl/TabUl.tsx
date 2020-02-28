import React from "react";
import { Box, BoxProps } from "rebass";

import { THEME } from "./TabUl.styled";

interface TabUlProps extends BoxProps {
  children: React.ReactNode;
  theme: "underLine" | "fill";
}

function TabUl({ children, theme = "underLine", ...rest }: TabUlProps) {
  return (
    <Box
      as="ul"
      sx={{
        ...THEME[theme].ul,
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
