import React, { ReactNode } from "react";
import { Box, Text } from "rebass";
import Header from "component/organisms/header/Header";
type PageTemplateProps = {
  children: ReactNode;
};

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <Header></Header>
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
          <Text
            sx={{
              py: 3,
              textAlign: "right",
              color: "content",
              fontSize: 2
            }}
          >
            공동체데이터센터 응용분석팀
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default PageTemplate;
