import React from "react";

import { Box, BoxProps } from "rebass";

type ListItemProps = BoxProps & {
  children: React.ReactNode;
};

function ListItem({ children, ...rest }: ListItemProps) {
  return (
    <Box
      sx={{
        padding: "10px 16px",
        bc: "clean",
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

export default ListItem;
