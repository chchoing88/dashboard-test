import React from "react";
import { Text, Box } from "rebass";

function StatusError() {
  return (
    <Box
      sx={{
        pt: "30px",
        textAlign: "center",
        color: "content"
      }}
    >
      <Text>네트워크 장애입니다.</Text>
      <Text>잠시 후에 다시 시도해 주세요.</Text>
    </Box>
  );
}

export default StatusError;
