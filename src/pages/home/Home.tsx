import React from "react";
import { Box, Heading, Text } from "rebass";
import PageTemplate from "component/templates/pageTemplate/PageTemplate";

import TotalStatus from "component/organisms/totalStatus/TotalStatus";

function Home() {
  return (
    <PageTemplate>
      <Box
        sx={{
          position: "relative",
          // width: "100%",
          pt: "5"
        }}
      >
        <Box>
          <Heading
            variant="secondaryHeading"
            sx={{
              display: "inline-block",
              pr: "2"
            }}
          >
            전체현황
          </Heading>
          <Text
            as="span"
            sx={{
              color: "content"
            }}
          >
            UFO 태그의 전체 현황을 확인하기 위한 공간입니다
          </Text>
          <Text as="p"></Text>
        </Box>

        <Text
          as="span"
          sx={{
            position: "absolute",
            right: 0,
            bottom: "8px",
            color: "content"
          }}
        >
          (데이터 제공 기준일 : 2019-01-10 ~ 2019-02-10)
        </Text>
      </Box>
      <TotalStatus></TotalStatus>
    </PageTemplate>
  );
}

export default Home;
