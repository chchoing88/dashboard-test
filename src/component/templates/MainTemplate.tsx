import React from "react";

import { Box } from "rebass";
import PageTemplate from "./PageTemplate";
import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";

type MainTemplateProps = {
  title: React.ReactElement;
  filter: React.ReactElement;
  status: React.ReactElement[] | React.ReactElement;
  occupancy: React.ReactElement[] | React.ReactElement;
  top: React.ReactElement[] | React.ReactElement;
};

function MainTemplate({
  title,
  filter,
  status,
  occupancy,
  top
}: MainTemplateProps) {
  return (
    <PageTemplate>
      {title}
      <Box variant="section" css={{ marginTop: "32px" }}>
        {filter}
        <Box sx={{ mt: 5 }}>{status}</Box>
        <Box sx={{ mt: 6 }}>
          <RowGrid>
            <ColGrid col={8}>{occupancy}</ColGrid>
            <ColGrid col={4}>{top}</ColGrid>
          </RowGrid>
        </Box>
      </Box>
    </PageTemplate>
  );
}

export default MainTemplate;
