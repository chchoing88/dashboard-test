import React, { useEffect, useRef } from "react";
import drawTagOccupancy from "utils/drawTagOccupancy";

import { Box } from "rebass";

import { IOccupancyItem } from "types";

type TagOccupancySunburstChartProps = {
  occupancyDataList: IOccupancyItem[];
};

function TagOccupancySunburstChart({
  occupancyDataList
}: TagOccupancySunburstChartProps) {
  const $elemChartWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ($elemChartWrapper.current) {
      drawTagOccupancy($elemChartWrapper.current, occupancyDataList);
    }
  }, [occupancyDataList]);

  return (
    <Box
      sx={{
        minHeight: "789px"
      }}
      ref={$elemChartWrapper}
    ></Box>
  );
}

export default TagOccupancySunburstChart;
