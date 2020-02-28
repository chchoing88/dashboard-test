import React from "react";

import { Box, BoxProps } from "rebass";

interface BoxListItemProps extends BoxProps {
  children: React.ReactNode;
}

function BoxListItem({ children, ...rest }: BoxListItemProps) {
  return (
    <Box
      sx={{
        padding: "8px 10px",
        marginBottom: "7px",
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

export default BoxListItem;
