import React from "react";
import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";

type ThreeStageGridProps = {
  children: React.ReactElement[];
};

function ThreeStageGrid({ children }: ThreeStageGridProps) {
  return (
    <RowGrid mx="-16px">
      <ColGrid width="33.33%" px="3">
        {children[0]}
      </ColGrid>
      <ColGrid width="33.33%" px="3">
        {children[1]}
      </ColGrid>
      <ColGrid width="33.33%" px="3">
        {children[2]}
      </ColGrid>
    </RowGrid>
  );
}

export default ThreeStageGrid;
