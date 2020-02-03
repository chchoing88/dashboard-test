import React from "react";
import { Box } from "rebass";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import FilterSection from "component/molecules/filterSection/FilterSection";
import StatusWidgetCard from "component/molecules/statusWidgetCard/StatusWidgetCard";

import TagOccupancyCard from "component/molecules/tagOccupancyCard/TagOccupancyCard";
import TagTopCard from "component/molecules/tagTopCard/TagTopCard";

import { IFilterButton } from "types";
const test: IFilterButton[] = [
  { id: "adid", name: "adid", isActive: true },
  { id: "aid", name: "aid", isActive: false },
  { id: "account id", name: "account id", isActive: false }
];

function TotalStatus() {
  return (
    <Box variant="section" css={{ marginTop: "32px" }}>
      <FilterSection
        title="기준 식별자"
        filterButtonList={test}
      ></FilterSection>
      <Box sx={{ mt: 5 }}>
        <RowGrid>
          <ColGrid width="33.33%">
            <StatusWidgetCard></StatusWidgetCard>
          </ColGrid>
          <ColGrid width="33.33%">
            <StatusWidgetCard></StatusWidgetCard>
          </ColGrid>
          <ColGrid width="33.33%">
            <StatusWidgetCard></StatusWidgetCard>
          </ColGrid>
        </RowGrid>
      </Box>
      <Box sx={{ mt: 6 }}>
        <RowGrid>
          <ColGrid width="66.66%">
            <TagOccupancyCard></TagOccupancyCard>
          </ColGrid>
          <ColGrid width="33.33%">
            <TagTopCard></TagTopCard>
          </ColGrid>
        </RowGrid>
      </Box>
    </Box>
  );
}

export default TotalStatus;
