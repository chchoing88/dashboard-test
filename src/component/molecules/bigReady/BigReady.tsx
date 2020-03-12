import React from "react";

import { Box, Text, Image } from "rebass";
import readyImage from "assets/images/ready.png";

function BigReady() {
  return (
    <Box
      sx={{
        pt: "30px",
        color: "content",
        fontSize: "25px",
        textAlign: "center"
      }}
    >
      <Text>준비중 입니다.</Text>
      <Image src={readyImage} width="300px"></Image>
    </Box>
  );
}

export default BigReady;
