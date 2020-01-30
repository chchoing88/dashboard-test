import React from "react";
import { Box } from "rebass";

type FilterTitleProps = {
  title: string;
};

function FilterTitle({ title }: FilterTitleProps) {
  return (
    <Box
      sx={{
        color: "content"
      }}
    >
      {title}
    </Box>
  );
}

export default FilterTitle;
