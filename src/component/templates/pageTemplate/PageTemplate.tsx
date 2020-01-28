import React from "react";
import { Flex, Box } from "rebass";

type PageTemplateProps = {
  children: React.ReactNode;
};

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "base"
      }}
    >
      <Flex
        sx={{
          width: "1280px",
          mx: "auto",
          px: 3
        }}
      >
        {children}
      </Flex>
    </Box>
  );
}

export default PageTemplate;
