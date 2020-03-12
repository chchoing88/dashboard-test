import React from "react";
import { Box, BoxProps } from "rebass";

import { TabThemeType } from "types";
import { THEME } from "./TabLi.styled";

type TabLiProps = BoxProps & {
  children: React.ReactNode;
  isActive: boolean;
  theme: TabThemeType;
  index: number;
};

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
