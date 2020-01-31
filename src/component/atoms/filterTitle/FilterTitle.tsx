import React from "react";
import { Box, BoxProps } from "rebass";

interface FilterTitleProps extends BoxProps {
  title: string;
}

function FilterTitle({ title, ...rest }: FilterTitleProps) {
  return (
    <Box
      sx={{
        color: "content"
      }}
      {...rest}
    >
      {title}
    </Box>
  );
}

export default FilterTitle;
