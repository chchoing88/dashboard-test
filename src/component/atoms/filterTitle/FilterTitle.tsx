import React from "react";
import { Box, BoxProps } from "rebass";

type FilterTitleProps = BoxProps & {
  title: string;
  children?: never;
};

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
