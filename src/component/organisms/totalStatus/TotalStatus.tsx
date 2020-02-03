import React from "react";
import useFilter from "hooks/useFilter";
import { Box } from "rebass";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import FilterSection from "component/molecules/filterSection/FilterSection";
import StatusWidgetCard from "component/organisms/statusWidgetCard/StatusWidgetCard";

import TagOccupancyCard from "component/organisms/tagOccupancyCard/TagOccupancyCard";
import TagTopCard from "component/organisms/tagTopCard/TagTopCard";

import { FILTER_LIST } from "../../../constants";

function TotalStatus() {
  useFilter();

  return (
    <Box variant="section" css={{ marginTop: "32px" }}>
      <FilterSection
        title="기준 식별자"
        filterButtonList={FILTER_LIST}
        onClick={() => {}}
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
