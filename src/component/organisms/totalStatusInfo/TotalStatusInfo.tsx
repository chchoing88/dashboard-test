import React from "react";
import { Box, Text } from "rebass";
import PageHeading from "component/atoms/pageHeading/PageHeading";
import PageDesc from "component/atoms/pageDesc/PageDesc";

function TotalStatusInfo() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: "5"
      }}
    >
      <Box>
        <PageHeading>전체현황</PageHeading>
        <PageDesc>UFO 태그의 전체 현황을 확인하기 위한 공간입니다.</PageDesc>
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
  );
}

export default TotalStatusInfo;
