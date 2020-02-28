import React from "react";
import { Box, Text } from "rebass";
import PageHeading from "component/atoms/pageHeading/PageHeading";
import PageDesc from "component/atoms/pageDesc/PageDesc";

type ModifyTime =
  | {
      start_date: string;
      end_date: string;
    }
  | undefined;

type TotalStatusInfoProps = {
  modifyTime: ModifyTime;
};

function TotalStatusInfo({ modifyTime }: TotalStatusInfoProps) {
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
        {modifyTime &&
          `(데이터 제공 기준일 : ${modifyTime.start_date} ~ ${modifyTime.end_date})`}
      </Text>
    </Box>
  );
}

export default TotalStatusInfo;
