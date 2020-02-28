import React from "react";
import { Box, BoxProps } from "rebass";

import { THEME } from "./TabLi.styled";

interface TabLiProps extends BoxProps {
  children: React.ReactNode;
  isActive: boolean;
  theme: "underLine" | "fill";
  index: number;
}

function TabLi({ children, isActive, theme, index, ...rest }: TabLiProps) {
  return (
    <Box
      as="li"
      sx={{
        position: "relative",
        float: "left",
        ...THEME[theme].li(isActive, index)
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default TabLi;
