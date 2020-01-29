import React from "react";
import { Box, Text } from "rebass";

import FilterButton from "component/atoms/filterButton/FilterButton";

function TotalStatus() {
  return (
    <Box variant="section" sx={{ mt: 4 }}>
      <Text as="span">기준 식별자 : </Text>

      <FilterButton name="ACCOUNT" onClick={e => {}} />

      <Box sx={{ overflow: "hidden", mx: "-16px" }}>
        <Box
          sx={{
            width: "33.33%",
            float: "left",
            px: 3
          }}
        ></Box>
        <Box
          sx={{
            width: "33.33%",
            float: "left",
            px: 3
          }}
        >
          <Box bg="pink" height="100px">
            2
          </Box>
        </Box>
        <Box
          sx={{
            width: "33.33%",
            float: "left",
            px: 3
          }}
        >
          <Box bg="green" height="100px">
            3
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TotalStatus;
