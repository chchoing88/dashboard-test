import React from "react";
import { Box } from "rebass";

type WidgetHeaderProps = {
  title: string;
};

function WidgetHeader({ title }: WidgetHeaderProps) {
  return (
    <Box
      as="strong"
      sx={{
        display: "block",
        py: 2,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "rgb(212, 212, 213)",
        bg: "base",
        textAlign: "center",
        fontSize: 2
      }}
    >
      {title}
    </Box>
  );
}

export default WidgetHeader;
