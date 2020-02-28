import React from "react";
import ListItem from "component/atoms/listItem/ListItem";
import { Text } from "rebass";
import EllipsisText from "component/atoms/ellipsisText/EllipsisText";

import { IServiceItem } from "types";

type CategoryItemProps = {
  categoryItem: IServiceItem;
  index: number;
  tooltipId: string;
};

function CategoryItem({ categoryItem, tooltipId, index }: CategoryItemProps) {
  return (
    <>
      <ListItem
        data-for={tooltipId}
        data-tip={categoryItem.services.join("-")}
        css={{
          borderTop: index === 0 ? "none" : "1px solid rgba(0,0,0,0.03)",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f5f7fc"
          }
        }}
      >
        <EllipsisText
          css={{
            float: "left"
          }}
        >
          {categoryItem.categoryname}
        </EllipsisText>
        <Text
          sx={{
            float: "right"
          }}
        >
          {`${categoryItem.servicecnt}건`}
        </Text>
      </ListItem>
    </>
  );
}

export default CategoryItem;
