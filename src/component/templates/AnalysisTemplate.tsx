import React from "react";

import { Box } from "rebass";
import PageTemplate from "./PageTemplate";
import ClearBox from "component/atoms/clearBox/ClearBox";

type AnalysisTemplateProps = {
  title: React.ReactElement;
  lookUp: React.ReactElement;

  contents: React.ReactElement[] | React.ReactElement;
};

function AnalysisTemplate({ title, lookUp, contents }: AnalysisTemplateProps) {
  return (
    <PageTemplate>
      {title}
      <Box variant="section" css={{ marginTop: "32px", minHeight: "256px" }}>
        <ClearBox>{lookUp}</ClearBox>
        {contents}
      </Box>
    </PageTemplate>
  );
}

export default AnalysisTemplate;
