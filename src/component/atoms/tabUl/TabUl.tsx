import React from "react";
import { Box, BoxProps } from "rebass";

import { TabThemeType } from "types";
import { THEME } from "./TabUl.styled";

type TabUlProps = BoxProps & {
  children: React.ReactNode;
  theme: TabThemeType;
};

function TabUl({ children, theme, ...rest }: TabUlProps) {
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
