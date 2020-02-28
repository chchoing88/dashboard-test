import React, { useEffect, useRef } from "react";
import drawTagTopBar from "utils/drawTagTopBar";

import { Box } from "rebass";

import { IUFOTagTop, ITabItem, IUfoCategoryIdValue } from "types";

type TagTopBarChartProps = {
  tagTopData: IUFOTagTop;
  currentTabData: ITabItem<Exclude<IUfoCategoryIdValue, "L" | "A">>;
};

function TagTopBarChart({ tagTopData, currentTabData }: TagTopBarChartProps) {
  const $elemChartWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ($elemChartWrapper.current && tagTopData) {
      drawTagTopBar($elemChartWrapper.current, tagTopData, currentTabData.id);
    }
  }, [currentTabData, tagTopData]);

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
