import React from "react";

import { Box } from "rebass";
import PageHeading from "component/atoms/pageHeading/PageHeading";
import CategoryTagTemplate from "component/templates/CategoryTagTemplate";

import CategoryTagContents from "component/organisms/categoryTagContents/CategoryTagContents";

function CategoryTag() {
  return (
    <CategoryTagTemplate
      title={
        <Box
          sx={{
            position: "relative",
            pt: "5"
          }}
        >
          <PageHeading>UFO 카테고리</PageHeading>
        </Box>
      }
      categoryContents={<CategoryTagContents></CategoryTagContents>}
    ></CategoryTagTemplate>
  );
}

export default CategoryTag;
