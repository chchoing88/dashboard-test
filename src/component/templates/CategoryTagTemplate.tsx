import React from "react";

import { Box } from "rebass";
import PageTemplate from "./PageTemplate";

type CategoryTagTemplateProps = {
  title: React.ReactElement;
  categoryContents: React.ReactElement;
};

function CategoryTagTemplate({
  title,
  categoryContents
}: CategoryTagTemplateProps) {
  return (
    <PageTemplate>
      {title}
      <Box
        sx={{
          marginTop: "32px"
        }}
      >
        {categoryContents}
      </Box>
    </PageTemplate>
  );
}

export default CategoryTagTemplate;
