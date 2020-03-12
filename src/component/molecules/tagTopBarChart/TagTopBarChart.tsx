import React, { useEffect, useRef } from "react";
import drawTagTopBar from "utils/drawTagTopBar";

import { Box } from "rebass";

import { IUFOTag } from "types";

type TagTopBarChartProps = {
  tagTopList: IUFOTag[];
  tagBarColor: string;
};

function TagTopBarChart({ tagTopList, tagBarColor }: TagTopBarChartProps) {
  const $elemChartWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ($elemChartWrapper.current && tagTopList && tagBarColor) {
      drawTagTopBar($elemChartWrapper.current, tagTopList, tagBarColor);
    }
  }, [tagTopList, tagBarColor]);

  return (
    <Box
      sx={{
        minHeight: "789px"
      }}
      ref={$elemChartWrapper}
    ></Box>
  );
}

export default TagTopBarChart;
