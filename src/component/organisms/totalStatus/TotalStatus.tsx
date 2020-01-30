import React from "react";
import { Box } from "rebass";

import ThreeStageGrid from "component/molecules/threeStageGrid/ThreeStageGrid";
import FilterSection from "component/molecules/filterSection/FilterSection";

import { IFilterButton } from "@types";
const test: IFilterButton[] = [
  { id: "adid", name: "adid", isActive: true },
  { id: "aid", name: "aid", isActive: false },
  { id: "account id", name: "account id", isActive: false }
];

function TotalStatus() {
  return (
    <Box variant="section" sx={{ mt: 4 }}>
      <FilterSection
        title="기준 식별자"
        filterButtonList={test}
      ></FilterSection>

      <ThreeStageGrid
        col1={<div>1</div>}
        col2={<div>2</div>}
        col3={<div>3</div>}
      />
    </Box>
  );
}

export default TotalStatus;
