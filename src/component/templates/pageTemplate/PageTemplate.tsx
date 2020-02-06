import React from "react";
import { Box } from "rebass";

type PageTemplateProps = {
  children: React.ReactElement[] | React.ReactElement;
};

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <Box
      sx={{
        pt: "55px",
        minWidth: "1280px"
      }}
    >
      <Box
        sx={{
          width: "1280px",
          mx: "auto",
          px: 3
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default PageTemplate;
