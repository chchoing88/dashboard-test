import React from "react";
import { Box } from "rebass";

import ThreeStageGrid from "component/molecules/threeStageGrid/ThreeStageGrid";
import FilterSection from "component/molecules/filterSection/FilterSection";
import StatusWidgetCard from "component/molecules/statusWidgetCard/StatusWidgetCard";

import { IFilterButton } from "@types";
const test: IFilterButton[] = [
  { id: "adid", name: "adid", isActive: true },
  { id: "aid", name: "aid", isActive: false },
  { id: "account id", name: "account id", isActive: false }
];

function TotalStatus() {
  return (
    <Box variant="section" sx={{ mt: 5 }}>
      <FilterSection
        title="기준 식별자"
        filterButtonList={test}
      ></FilterSection>
      <Box sx={{ mt: 5 }}>
        <ThreeStageGrid>
          <StatusWidgetCard></StatusWidgetCard>
          <StatusWidgetCard></StatusWidgetCard>
          <StatusWidgetCard></StatusWidgetCard>
        </ThreeStageGrid>
      </Box>
    </Box>
  );
}

export default TotalStatus;
