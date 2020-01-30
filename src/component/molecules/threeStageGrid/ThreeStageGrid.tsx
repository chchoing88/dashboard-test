import React from "react";
import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";

type ThreeStageGridProps = {
  col1: React.ReactNode;
  col2: React.ReactNode;
  col3: React.ReactNode;
};

function ThreeStageGrid({ col1, col2, col3 }: ThreeStageGridProps) {
  return (
    <RowGrid mx="-16px">
      <ColGrid width="33.33%" px="3">
        {col1}
      </ColGrid>
      <ColGrid width="33.33%" px="3">
        {col2}
      </ColGrid>
      <ColGrid width="33.33%" px="3">
        {col3}
      </ColGrid>
    </RowGrid>
  );
}

export default ThreeStageGrid;
