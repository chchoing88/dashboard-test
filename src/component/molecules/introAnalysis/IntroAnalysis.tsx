import React from "react";
import { Box, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSurprise } from "@fortawesome/free-solid-svg-icons";
import { faSurprise } from "@fortawesome/free-regular-svg-icons";

function IntroAnalysis() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "60px 0",
        fontSize: "24px"
      }}
    >
      {/* <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon> */}
      <Text sx={{ display: "inline-block", mr: "5px" }}>
        '랜덤 유저 조회' 버튼을 눌러서 사용자 정보를 확인해보세요.
      </Text>
      <FontAwesomeIcon icon={faSurprise}></FontAwesomeIcon>
    </Box>
  );
}

export default IntroAnalysis;
