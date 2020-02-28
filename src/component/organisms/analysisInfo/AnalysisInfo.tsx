import React from "react";
import { Box, Text } from "rebass";

import PageHeading from "component/atoms/pageHeading/PageHeading";
import PageDesc from "component/atoms/pageDesc/PageDesc";

function AnalysisInfo() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: "5"
      }}
    >
      <Box>
        <PageHeading>사용자 분석</PageHeading>
        <PageDesc>
          <Text as="strong">adid</Text> 기준의 유저의 특성 정보만 제공합니다.
        </PageDesc>
        <Text as="p"></Text>
      </Box>
    </Box>
  );
}

export default AnalysisInfo;
