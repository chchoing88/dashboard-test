import * as React from "react";
import { Box } from "rebass";
import { getMean, getStdDeviation, gerneratingXPoint, normalY } from "utils";

type ConsumeDistributionGraphProps = {
  percent: number;
};

// N(평균, 표준편차^2)
const BOTTOM_SPACE = 25;
const BAR_WIDTH = 10;
const STEP = 20;
const LAST_INDEX = STEP - 1;
const STEP_INTERVAL = 2;
const BAR_HEIGHT = 80;
const BAR_MIN_HEIGHT = 10;
const LOW_BOUND = 50;
const UPPER_BOUND = 150;
const MAX_LABEL_XPOSITION = 170;
const SVG_HEIGHT = BOTTOM_SPACE + BAR_HEIGHT + BAR_MIN_HEIGHT;

const mean = getMean(LOW_BOUND, UPPER_BOUND);
const stdDev = getStdDeviation(LOW_BOUND, UPPER_BOUND);
const seriesData = gerneratingXPoint(BAR_WIDTH, STEP).map(xPoint => ({
  x: xPoint,
  y: normalY(xPoint, mean, stdDev, BAR_HEIGHT, BAR_MIN_HEIGHT)
}));

function ConsumeDistributionGraph({ percent }: ConsumeDistributionGraphProps) {
  const matchIndex = Math.round(LAST_INDEX - (percent * LAST_INDEX) / 100);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        as="svg"
        width={`${STEP * BAR_WIDTH + STEP_INTERVAL * STEP - 1}px`}
        height={`${SVG_HEIGHT}px`}
      >
        <g transform={`translate(0, -${BOTTOM_SPACE})`}>
          {seriesData.map((stepItem, index) => {
            return (
              <rect
                key={stepItem.x}
                x={index * (BAR_WIDTH + STEP_INTERVAL)}
                y={SVG_HEIGHT - stepItem.y}
                width={BAR_WIDTH}
                height={stepItem.y}
                fill={index === matchIndex ? "#497adc" : "#ececef"}
              />
            );
          })}
        </g>

        {seriesData.map((stepItem, index) => {
          return (
            index === matchIndex && (
              <g
                key={stepItem.x}
                transform={`translate(${
                  index * (BAR_WIDTH + STEP_INTERVAL) > MAX_LABEL_XPOSITION
                    ? MAX_LABEL_XPOSITION
                    : index * (BAR_WIDTH + STEP_INTERVAL)
                }, ${SVG_HEIGHT - 3})`}
              >
                <text x="0" y="0">{`상위 ${percent}%`}</text>
              </g>
            )
          );
        })}
      </Box>
    </Box>
  );
}

export default ConsumeDistributionGraph;
